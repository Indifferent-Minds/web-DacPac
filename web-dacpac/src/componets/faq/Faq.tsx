import React from 'react';
import './Faq.css'
import Card from '../card/Card';

interface Faq {
    question: string;
    answer: React.ReactNode;
}

interface FaqProps {
    faqs: Faq[];
}

export default function Faq({faqs}: FaqProps) {
    return <Card id='faq' className='slide-in-right' title='❔ Preguntas frecuentes'>
        <div className="accordion accordion-flush" id="faqAcordion">
            {
                faqs.map((faq, idx) => 
                    <div className="accordion-item" key={idx}>
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse"+idx.toString()} aria-expanded="false" aria-controls={"collapse"+idx.toString()}>
                                {faq.question}
                            </button>
                        </h2>
                        <div id={"collapse"+idx.toString()} className="accordion-collapse collapse" data-bs-parent="#faqAcordion">
                            <div className="accordion-body">
                                {faq.answer}
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    </Card>
}