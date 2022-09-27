class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <!-- ======= Footer ======= -->
        <footer id="footer" class="footer">
      
          <div class="container">
            <div class="row gy-4">
              <div class="col-lg-5 col-md-12 footer-info">
                <a href="index.html" class="logo d-flex align-items-center">
                  <span>Stair</span>
                </a>
                <p>
                Stair is all about increasing your brand popularity, bringing in more customers, generating boost of sales, and seeing our clients succeed.
                </p>
                <div class="social-links d-flex mt-4">
                  <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
                  <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
                  <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
                  <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
                </div>
              </div>
      
              <div class="col-lg-2 col-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><a href="#">Why Choose Us</a></li>
                  <li><a href="#">About us</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Terms of service</a></li>
                  <li><a href="#">Privacy policy</a></li>
                </ul>
              </div>
      
              <div class="col-lg-2 col-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li><a href="#">Digital Marketing</a></li>
                  <li><a href="#">Web Development</a></li>
                  <li><a href="#">Web Hosting</a></li>
                  <li><a href="#">SEO Content Writing</a></li>
                  <li><a href="#">SEO</a></li>
                </ul>
              </div>
      
              <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                <h4>Contact Us</h4>
                <p>
                  2109 Paradise Ridge Dr<br>
                  Texas<br>
                  United States <br><br>
                  <strong>Phone:</strong> +1 5589 55488 55<br>
                  <strong>Email:</strong> info@example.com<br>
                </p>
      
              </div>
      
            </div>
          </div>
      
          <div class="container mt-4">
            <div class="copyright">
              &copy; Copyright <strong><span>Stair</span></strong>. All Rights Reserved
            </div>
          
          </div>
      
        </footer><!-- End Footer -->
        <!-- End Footer -->
      
       
        `;
  }
}
customElements.define("my-footer", MyFooter);
