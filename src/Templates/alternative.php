<div id="hero" class="bg-image" style="background-image:url('/Images/hero-ros.png')" alt="Picture of a rose"> </div>

<main>
    <header> 
        <span> Kajsas Rosor </span>
    </header>

    <article>
        <header>
            <h1>Detta är Kajsas Rosor</h1>
        </header>

        <img src="/Images/mainRose.svg" alt="A picture of a Rose"/>

        <p>
        </p>

        <section>
            <h2>Rosen Idag</h2>
            <p>
            </p>
        </section>

        <section id="bloopers">
            <h2>Aktuellt Just Nu</h2>
            <?php for ($i = 0; $i < 4; $i++) : ?>
            <figure>
                <!-- an image tag that that links to a 1px big transparent png, and is given an background image instead. For html5 syntastic reasons -->
                <img class="bg-image" style="background-image:url('/Images/yo.jpg');" src="/Images/1px-trans.png" alt="Picture of a rose"/> 
                <figcaption>
                    <h2> Ros </h2> 
                    <p> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod </p>
                </figcaption>
            </figure> 
            <?php endfor ?>
        </section>
    </article>

    <address>
        <section>
          <h2>Besök oss</h2>  
          <p>Adress</p>
          <p>Rosvägen 16, 111 64 Stockholm</p>
          <a href="http://www.url.com">Vägbeskrivning</a>
        </section>

        <section>
          <h2>Öppettider</h2>  
          <p>Vardagar 10-19</p>
          <p>Lördagar 10-19</p>
          <p>Söndagar 10-19</p>
        </section>

        <section>
          <h2>Telefon</h2>  
          <p>08-422 95 00</p>
        </section>

        <section>
          <h2>E-Post</h2>  
          <p>info@kajsasrosor.se</p>
        </section>

        <section>
          <h2>Karta</h2>  
          <img src="Images/map.jpg" alt="An image of a map displaying the location of the store"/>
        </section>
    </address>
    <footer> 
        <address>
            <p>Kajsas Rosor, Rosvägen 16. 113 53 Stockholm | 08-422 95 00 | info@kajsasrosor.se </p>
        </address>
    </footer>
</main>
