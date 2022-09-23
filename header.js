class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<!-- ======= Header ======= -->
<section id="topbar" class="topbar d-flex align-items-center sticky-top">
  <div class="container d-flex justify-content-center justify-content-md-between">
    <div class="contact-info d-flex align-items-center">
      <i class="bi bi-envelope d-flex align-items-center"><a href="mailto:contact@example.com">contact@example.com</a></i>
      <i class="bi bi-phone d-flex align-items-center ms-4"><span><a href="tel:9878756778">+1 5589 55488 55</a></span></i>
    </div>
    <div class="social-links d-none d-md-flex align-items-center">
      <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
      <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
      <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
      <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></i></a>
    </div>
  </div>
</section><!-- End Top Bar -->

<header id="header" class="header d-flex align-items-center">

  <div class="container-fluid container-xl d-flex align-items-center justify-content-between">
    <a href="index.html" class="logo d-flex align-items-center">
      <!-- Uncomment the line below if you also wish to use an image logo -->
      <img src="assets/img/favicon.png" alt="">
      <!-- <h1>Impact<span>.</span></h1> -->
     
    </a>
   <nav id="navbar" class="navbar me-lg-5">
      <ul>
        <li class="dropdown"><a href="#"><span>SERVICES</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
          <ul>
            <li><a href="webdesign.html">WEB DEVELOPMENT</a></li>
            <li class="dropdown"><a href="digital-marketing.html"><span>DIGITAL MARKETING</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
              <ul>
               <li class="digital"><a href="digital-marketing.html">DIIGITAL MARKETING</a></li> 
                <li><a href="seo.html">SEO</a></li>
                <li><a href="content-writing.html">CONTENT WRITING</a></li>
                <li><a href="social-media-marketing.html">SOCIAL MEDIA MARKETING</a></li>
              </ul>
            <li><a href="web-hosting.html">WEB HOSTING</a></li>
           
          </ul>
        </li>
       <li class="dropdown"><a href="#"><span>COMPANY</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
          <ul>
            <li><a href="who-we-are.html">ABOUT US?</a></li>
            <li><a href="why-choose-us.html">WHY CHOOSE US?</a></li>
            <li><a href="seo-code-of-ethics.html">SEO CODE OF ETHICS</a></li>
            <li><a href="testimonials.html">CLIENTS TESTIMONIALS</a></li>
            
          </ul>
        </li>
      <li><a href="blog.html">BLOGS</a></li>
      <li><a href="contact.html">CONTACT</a></li>
      </ul>
    </nav><!-- .navbar -->

    <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
    <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

  </div>
</header><!-- End Header -->
<!-- End Header -->
`;
  }
}
customElements.define("my-header", MyHeader);
