import React from "react"
import EMailÄndernContent from "./EMailÄndernContent";

const DropdownMenu = () => {


    const items = [
        {
            number: 'One',
            icon: 'fa-envelope',
            title: 'E-Mail-Benachrichtigungen verwalten',
            content: 'Placeholder content for this accordion, which is intended to demonstrate the class. This is the first item`s accordion body.'
        },
        {
            number: 'Two',
            icon: 'fa-at',
            title: 'E-Mail-Adresse ändern',
            content: <EMailÄndernContent />
        },
        {
            number: 'Three',
            icon: 'fa-lock',
            title: 'Passwort ändern ',
            content: 'Placeholder content for this accordion, which is intended to demonstrate the class. This is the third item`s accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.'
        },
        {
            number: 'Four',
            icon: 'fa-sticky-note',
            title: 'Onlinedarstellung verwalten',
            content: 'Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item`s accordion body.'
        },
        {
            number: 'Five',
            icon: 'fa-times-circle',
            title: 'Benutzerkonto löschen',
            content: 'Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item`s accordion body.'
        }

    ]


    return (
        <div className='DropdownMenu d-flex flex-column justify-content-center align-items-center '>
            <div class="accordion accordion-flush w-50 " id="accordionFlushExample">
                {items.map((item, index) => {
                    return (
                        <div class="accordion-item">
                            <h2 class="accordion-header" id={`flush-heading${item.number}`}>
                                <div class="accordion-button collapsed fs-5" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${item.number}`} aria-expanded="false" aria-controls={`flush-collapse${item.number}`}>
                                    <i className ={`fas ${item.icon} me-2 color-blue`}></i><span>{item.title}</span>
                                </div>
                            </h2>
                            <div id={`flush-collapse${item.number}`} class="accordion-collapse collapse" aria-labelledby={`flush-heading${item.number}`} data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    {item.content}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};

export default DropdownMenu;
