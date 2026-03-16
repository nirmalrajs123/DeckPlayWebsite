import React from 'react';

function Solutions() {
    return (
        <>
            <section className="solutions-section">
                <h2>Digital signage solutions</h2>
                <p className="solutions-subtitle">Our digital signage solutions can benefit your organization, no matter your industry.</p>

                <div className="solutions-grid">
                    {[
                        {
                            title: "Manufacturing",
                            img: "/manufacturing.png",
                            desc: "From HQ to the factory floor, our web based digital signage improves productivity and safety."
                        },
                        {
                            title: "Education",
                            img: "/education.png",
                            desc: "Inspire students and faculty with captivating digital screens that bring a sense of belongingness."
                        },
                        {
                            title: "Restaurants",
                            img: "/restaurant.png",
                            desc: "Dazzling menu boards and posters will take upselling & customer satisfaction to new heights."
                        },
                        {
                            title: "Retail",
                            img: "/retail.png",
                            desc: "Amaze shoppers using digital billboard software to showcase products and boost sales."
                        },
                        {
                            title: "Offices",
                            img: "/office.png",
                            desc: "Improve performance in your office environment with screens that inform and strengthen collaboration."
                        },
                        {
                            title: "Healthcare",
                            img: "/healthcare.png",
                            desc: "Promote health tips, raise awareness and improve facilities navigation with engaging screens."
                        }
                    ].map((item, idx) => (
                        <div key={idx} className="solution-card">
                            <div className="solution-screen">
                                <img src={item.img} alt={item.title} />
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default Solutions;
