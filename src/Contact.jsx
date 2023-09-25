const Contact = () => {

    const handleSubmit = (event) => {
        event.preventDefault()
        alert("you submitted")
    }

    return (
        <section id="contact-us" className="">
            <form action="" onSubmit={handleSubmit}>
                <label>
                    Full Name
                    <input type="text" />
                </label>
                <br />
                <label>
                    Email Address
                    <input type="email" />
                </label>
                <label>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </label>
                <br />
                <input type="submit" value="send" className="text-[#e3e3e3] px-6 py-2 rounded-xl border-slate-700 bg-[green] hover:bg-[#325d32]" />
            </form>
        </section>
    )
}

export default Contact
