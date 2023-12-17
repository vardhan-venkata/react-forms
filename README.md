## React Forms Demo

##### In this project you will find the demo on the forms for various ways of implementing.

### -> Types :

1. Class component with controlled components.
2. Class Component with un-controlled components.
3. Functional component with controlled components.
4. Functional component with un-controlled components.

1. Class component with controlled components -> 
For each element we will be maintaining state and when any change is done for that element
we will be updating the state for that element.

    this.state = { email: "", password: "" };
    In this case, we have a state for the email.
    handleEmailChange(e) {
        this.setState({ email: e.target.value });
    }
    We are updating the state only for that particular element.
    For more info. Please check in src/ClassControlled/ClassControlled.jsx file

2. Class component with un-controlled components -> 
For each element we will create a reference (using createRef) and then for the element we will provide the reference created, the DOM will handle the element updation.

    this.email = React.createRef();
    In this case, we do not need to write any event handling, because DOM will take care of that.
    By using this way we can access the current value for that reference -> ${this.email?.current?.value}
    For more info. Please check in src/ClassUnControlled/ClassUnControlled.jsx file

3. Functional component with controlled components -> 
For each element we will be maintaining state and when any change is done for that element
we will be updating the state for that element.

    const [email, setEmail] = useState("");
    In this case, we have a state for the email.
    onChange={(e) => setPassword(e.target.value)}
    We are updating the state only for that particular element.
    For more info. Please check in src/FunctionalControlled/FunctionalControlled.jsx file

4. Functional component with un-controlled components -> 
For each element we will create a reference (using createRef) and then for the element we will provide the reference created, the DOM will handle the element updation.

    const emailRef = useRef();
    In this case, we do not need to write any event handling, because DOM will take care of that.
    By using this way we can access the current value for that reference -> ${emailRef.current.value}
    For more info. Please check in src/FunctionalUnControlled/FunctionalUnControlled.jsx file
