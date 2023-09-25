import background from './assets/background.jpg'

const About = () => {

  const backgroundStyle = {
    backgroundImage: `url(${background})`
  }

  return (
    <section className="scroll-mt-40 mt-44 h-[85vh] text-justify" id="about-us">
      <h1 className="font-nunitoSans text-3xl font-bold mr-auto ml-auto w-32 mb-8 underline decoration-[green] underline-offset-8">About Us</h1>
      <div style={backgroundStyle} className="bg-cover w-[65%] h-[65vh] rounded-lg p-24 pt-32 ml-auto mr-auto opacity-100 shadow-xl shadow-[#244824]">
        <div className="bg-slate-50 p-8 rounded-lg opacity-90 leading-8">
            <p>
                At <span className="text-[green] font-bold">GoalZone</span>, we&apos;re driven by a deep love for football and a
                commitment to simplifying your experience. We understand the frustration
                of traditional booking methods, which is why we&apos;ve created a platform
                that allows you to reserve stadiums effortlessly. Say goodbye to phone
                calls and complicated processes. With us, you can see all available
                slots, select the perfect time, and secure your spot with just a few
                clicks. Join our community and let&apos;s make football more accessible and
                enjoyable for you and your friends.
        </p>
        </div>
      </div>
    </section>
  )
}

export default About
