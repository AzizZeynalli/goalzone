import { partners } from './constants'

const Partners = () => {
    return (
        <section id="partners" className="scroll-mt-40 scroll-mb-96 my-40">
            <h1 className="font-nunitoSans text-3xl text-center font-bold mx-auto w-56 mb-8 underline decoration-[green] underline-offset-8">Our partners</h1>
            <ul className="flex flex-wrap justify-evenly align-middle">
                {partners.map((partner) => (
                    <li key={partner.name} className="bg-[#ffffff] rounded-xl shadow-lg p-10 translate-x-6">
                        <p className="text-center pb-4 font-semibold text-xl">{partner.name}</p>
                        <img src={partner.logo} width={250} height={250} />
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Partners
