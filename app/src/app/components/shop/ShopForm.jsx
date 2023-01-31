const ShopForm = () => {
        cosnt [credantials, setCredentials] = useState({})

        const handleChange = (e) => {
            const {name, value} = e.target
            setCredentials({...credentials, [name]: value})
        }

     



    return ( 
        <form>
            <div>
                <input type="text" name="name"/>
            </div>
            <div>
                <input type="text" name="description"/>
            </div>
            <div>
                <input type="text" name="location"/>
            </div>
            <div>
                <input type="text" name="imageUrl"/>
            </div>
        </form>
     );
}
 
export default ShopForm;