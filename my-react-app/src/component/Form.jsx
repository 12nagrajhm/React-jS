const Form=()=>{

    return (<div>
        <form>
            <label for="name">Name</label>
            <input type="name" id="name" name="name" required /><br/>
            <label for="email">Email</label>
            <input type="email" is="email" name="email"/><br/>
            <button type="Submit">Submit</button>
        </form>

    </div>);

}


export default Form;