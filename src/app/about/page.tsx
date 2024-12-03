import React from "react";
const About = () => {
  return (
    <section className="about h-screen flex items-center justify-start bg-cover bg-center text-blue-950 px-10" style={{ backgroundImage: "url('/background-img.jpg')"}}>
        <div className=" bg-[#B9FF66] p-8  max-w-lg ">
            <h2 className="text-4xl font-bold mb-4" data-aos="fade-up">About Us</h2>
            <p>Welcome to our world of Nike—a name synonymous with innovation,
            performance, and style. As one of the leading global sportswear
            brands, Nike has been at the forefront of empowering athletes and
            fitness enthusiasts for decades. From iconic running shoes to
            cutting-edge designs for every sport, our products combine advanced
            technology with unparalleled comfort. Driven by a passion for
            excellence and inspired by the spirit of &quot;Just Do It,&quot; we
            aim to motivate individuals to push their limits and achieve
            greatness. Join us in celebrating a legacy of sportsmanship,
            creativity, and resilience.</p>
        </div>

    </section>
    
  )
}

export default About;
