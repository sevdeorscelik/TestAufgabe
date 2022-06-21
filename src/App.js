import './App.css';

function App() {


  return (
    <div className="App ">
      <header className='position-relative d-flex justify-content-center mb-5  '>

        <div className='position-absolute d-flex flex-column justify-content-center align-items-center user-container'>

          <div className='position-relative '>

            <div className=' overflow-hidden ps-2 pe-2 rounded-circle box-user'>
              <i className="fas fa-user p-2 user-icon "></i>
            </div>

            <i className="fas fa-pen position-absolute end-0 rounded-circle p-2 text-light fs-6 bg-red pen-icon"></i>

          </div>

          <p className='fs-4 fw-bold color-blue'>devel oper</p>

        </div>
      </header>

      <main className='d-flex flex-column justify-content-center align-items-center '>
        <div class="accordion accordion-flush w-50 " id="accordionFlushExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne">
              <div class="accordion-button collapsed fs-5" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                <i class="fas fa-envelope me-2 color-blue"></i><span>E-Mail-Benachrichtigungen verwalten</span>
              </div>
            </h2>
            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingTwo">
              <div class="accordion-button collapsed fs-5" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                <i class="fas fa-at me-2 color-blue"></i><span>E-Mail-Adresse ändern</span>
              </div>
            </h2>
            <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body d-flex flex-column justify-content-center  ">
                <p className='lh-lg'>Du hast eine neue E-Mail-Adresse? Hier kannst du jederzeit deine E-Mail-Adresse ändern. <br /> Deine aktuelle E-Mail-Adresse: <strong > devet@familienservice.de </strong> </p>
                <div className='align-self-center'>
                  <button type="button" class="btn text-white p-3 pe-5 ps-5 fw-bold bg-red" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">E-MAIL-ADRESSE ÄNDERN</button>
                  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">New message</h5>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                          <form>
                            <div class="mb-3">
                              <label for="recipient-name" class="col-form-label">Recipient:</label>
                              <input type="text" class="form-control" id="recipient-name" />
                            </div>
                            <div class="mb-3">
                              <label for="message-text" class="col-form-label">Message:</label>
                              <textarea class="form-control" id="message-text"></textarea>
                            </div>
                          </form>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          <button type="button" class="btn btn-primary">Send message</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <i class="fas fa-angle-up align-self-center mt-5 fs-5 color-red"></i>
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingThree">
              <div class="accordion-button collapsed fs-5" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                <i class="fas fa-lock me-2 color-blue"></i><span> Passwort ändern </span>
              </div>
            </h2>
            <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingFour">
              <div class="accordion-button collapsed fs-5" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                <i class="fas fa-sticky-note me-2 color-blue"></i><span>Onlinedarstellung verwalten</span>
              </div>
            </h2>
            <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingFive">
              <div class="accordion-button collapsed fs-5" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                <i class="fas fa-times-circle me-2 color-blue"></i><span>Benutzerkonto löschen </span>
              </div>
            </h2>
            <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
