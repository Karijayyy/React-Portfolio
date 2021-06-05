import React from "react";

// function Home () {
// return (
//     <>
//     <div>Home</div>
//     <div>This is my homepage</div>
//     </>
// ) 
// };

function Home() {
    return (
        <main className="container">
            <div className="row">
                <h2 className="col-sm-12" style={{ paddingTop: "25px" }}>About Me</h2>
            </div>
            <hr />
            <section className="row">
                <div className="col-sm-12">
                    {/* <img src={Headshot} id="headshot" className="float-left mr-2" */}
                        {/* style={{ maxWidth: "30%", height: "auto" }} alt="Headshot of Giovany" /> */}
                    <p>
                    <br /><br />
                   
                    <br /><br />
                    
                    <br /><br />
                            {/* href={Resume} target="_blank" download>resume</a>. */}
                    </p>
                </div>
            </section>
        </main>
    );
};

export default Home;