import React from "react"

const Popup = () => {
    return (
        
            <div class="Popup modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">E-Mail-Adresse ändern</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p>
                                Bitte gib deine neue E-Mail-Adresse zweimal an. Deine alte E-Mail-Adresse wird damit für das Portal ungültig. Bei Angeboten oder Fragen werden wir dich künftig über die neue E-Mail-Adresse kontaktieren. Um wieder alle Funktionen des Portals nutzen zu können, musst du deine neue E-Mail-Adresse bestätigen.
                            </p>
                            <form>
                                <div class="mb-3">
                                    <input type="email" class="form-control" id="recipient-name" placeholder='Neue E-Mail-Adresse' />
                                </div>
                                <div class="mb-3">
                                    <input type="email" class="form-control" id="recipient-name" placeholder='Neue E-Mail-Adresse wiederholen' />
                                </div>
                            </form>
                        </div>
                        <div class="d-flex justify-content-center mt-5 mb-5">

                            <button type="button" disabled class="btn text-white p-3 pe-5 ps-5 fw-bold bg-red w-75">
                                SPEICHERN</button>

                        </div>
                    </div>
                </div>
            </div>
       
    )
};

export default Popup;
