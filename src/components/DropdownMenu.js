import React from "react"
import EMailÄndernContent from "./EMailÄndernContent";

const DropdownMenu = () => {


    const items = [
        {
            number: 'One',
            icon: 'fa-envelope',
            title: 'E-Mail-Benachrichtigungen verwalten',
            content: 'Möchten Sie Benachrichtigungen verwalten? Sie können Ihre Benachrichtigungseinstellungen jederzeit hier ändern.'
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
            content: 'Möchten Sie Ihr Passwort ändern? Hier können Sie Ihr Passwort jederzeit ändern.'
        },
        {
            number: 'Four',
            icon: 'fa-sticky-note',
            title: 'Onlinedarstellung verwalten',
            content: 'Hier können Sie Onlinedarstellung verwalten.'
        },
        {
            number: 'Five',
            icon: 'fa-times-circle',
            title: 'Benutzerkonto löschen',
            content: 'Hier können Sie Ihre Benutzerkonto löschen.'
        }

    ]


    return (
        <div className='DropdownMenu d-flex flex-column justify-content-center align-items-center '>
            <div className="accordion accordion-flush w-50 " id="accordionFlushExample">
                {items.map((item, index) => {
                    return (
                        <div className="accordion-item">
                            <h2 className="accordion-header" id={`flush-heading${item.number}`}>
                                <div className="accordion-button collapsed fs-5" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${item.number}`} aria-expanded="false" aria-controls={`flush-collapse${item.number}`}>
                                    <i className ={`fas ${item.icon} me-2 color-blue`}></i><span>{item.title}</span>
                                </div>
                            </h2>
                            <div id={`flush-collapse${item.number}`} className="accordion-collapse collapse" aria-labelledby={`flush-heading${item.number}`} data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
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
