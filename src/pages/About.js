import "./about.scss"

const About = () => {

    return (

    <section class="aboutContainer" role="main">
        <h1 className="page-header__title"> Our history</h1>
    <section className="page-content white shadow center">
        <div class="item">
                
            <div class="item__img"><img src="1.jpg"/></div>
            <article class="item__info">
                <h2 className="bold">History</h2>
                <p class="p-col bold">Established in the late 1960s, our family owned business is based in Edinburgh and Falkirk, but services customers across the UK. </p>
                <p>Our Edinburgh branch has the longest history as an audio retailer in the UK. During recent renovations, receipts were found from Nicolson’s Gramophone Saloon dating back to 1926. In the 1950s WG Graham took over the shop and renamed it WG Graham’s Hi-Fi Corner. Upon his retirement, Graham Tiso bought the business and shortened the name to Hi-Fi Corner.  </p>
                <p>Soon thereafter a young enthusiastic Colin MacKenzie (left), who was recommended by Linn’s own Ivor Tiefenbrun, was employed to manage the shop; with a knack for business and years of experience in the hi-fi industry, Colin would later become the owner of Hi-Fi Corner. Today, Struan MacKenzie carries on the legacy as the company’s Managing Director. </p>
            </article>
        </div>


        <div class="item">
            <article class="item__info">
                <h2 className="bold">Hear The Difference</h2>
                <p class="p-col bold">Book a demonstration at our Edinburgh or Falkirk showrooms.   </p>
                <p>Would you choose a quality car without a test drive? If you are familiar with the brand and have great trust in it, you might. However, our listening preferences are unique to the individual and with many of our customers new to the world of high quality sound and vision, we encourage everyone to come in to demonstrate the products they are interested in. You’ll find a relaxing and comfortable environment in both our Edinburgh and Falkirk premises where you can decide for yourself if the kit is right for you. We also offer home demonstrations on selected products.</p>
                <p>It's our aim to get the right product for you.</p>
                <p>Our experts are on hand to guide you through the differences between speakers, amplifiers and sources and provide simple solutions that suit your needs.</p>
                </article>
            <div class="item__img"><img src="2.jpg"/></div>
        </div>


        <div class="item">
            <div class="item__img"><img src="3.jpg"/></div>
            <article class="item__info">
                <h2 className="bold">Services</h2>
                <p class="p-col bold">Our passion for the products we sell and, for our customers’ satisfaction simply means that we happily offer additional services not found on the high-street. </p>
               
                <p><span className="thick">Home Setup -</span>  We want to ensure that the equipment you’ve purchased from us is installed correctly and sounds perfect; and we happily provide this service throughout the UK.</p>
                <p><span className="thick">Part Exchange –</span>  To help you upgrade your system, we offer our part-exchange program. We can offer a set price, or sell your old kit on your behalf.</p>
                <p><span className="thick">Turntable Doctor –</span>  Our turntable experts have been trained by the manufacturers for initial setup, long-term maintenance, and upgrading your high quality turntables.</p>
                <p><span className="thick">Record Cleaning Service –</span>  Have some old records that need a bit of love? We offer Scotland’s very own professional record cleaning service with our bespoke Pro-Ject record cleaner.</p>
                </article>
        </div>


        <div class="item">
            <article class="item__info">
                <h2 className="bold">Tailored For You</h2>
                <p class="p-col bold">We look forward to customising a system to meet your needs.  </p>

                <p>We don’t favour one manufacturer over another – the only thing we do favour is making sure our customers get the right product that suits their needs and listening preferences. We will ask many questions in order to ensure that what you buy from us is tailored to you and you alone. </p>
                <p>If you are looking for a product not found in our demonstration showrooms or our online site, don’t fret as we have access to hundreds of brands.</p>
                <p>One of our biggest pleasures of working in this industry is to see the smile on our customers’ faces when they finally hear and see the system of their dreams.   </p>
            </article>
            <div class="item__img"><img src="4.jpg"/></div>
        </div>
    </section>
    
    
    </section>
    
     );
     
}

export default About;