import React from 'react'
import './questions.scss'

function Questions() {
    return (
        <div className='questions-outer-div'>
            <span className='questions-title'>Frequently Asked Questions.<div className='questions-title-underline'/></span>
            <div className='questions-div'>
                <div>
                    <div className='question-div'>
                        <p className='question' data-bs-toggle="collapse" data-bs-target="#question1" aria-expanded="false" aria-controls="collapseExample">
                            1. What are DevOps Development services?
                        </p>
                        <div class="collapse" id="question1">
                            <div class="card card-body">
                                The term DevOps is a combination of two words development and operations. It's an approach and methodology of the development process, in which programmers, testers, and system administrators can work together on a product for faster and efficient delivery.
                            </div>
                        </div>
                    </div>

                    <div className='question-div'>
                        <p className='question' data-bs-toggle="collapse" data-bs-target="#question2" aria-expanded="false" aria-controls="collapseExample">
                            2. What are DevOps Development services?
                        </p>
                        <div class="collapse" id="question2">
                            <div class="card card-body">
                                The term DevOps is a combination of two words development and operations. It's an approach and methodology of the development process, in which programmers, testers, and system administrators can work together on a product for faster and efficient delivery.
                            </div>
                        </div>
                    </div>

                    <div className='question-div'>
                        <p className='question' data-bs-toggle="collapse" data-bs-target="#question3" aria-expanded="false" aria-controls="collapseExample">
                            3. What are DevOps Development services?
                        </p>
                        <div class="collapse" id="question3">
                            <div class="card card-body">
                                The term DevOps is a combination of two words development and operations. It's an approach and methodology of the development process, in which programmers, testers, and system administrators can work together on a product for faster and efficient delivery.
                            </div>
                        </div>
                    </div>

                    <div className='question-div'>
                        <p className='question' data-bs-toggle="collapse" data-bs-target="#question4" aria-expanded="false" aria-controls="collapseExample">
                            4. What are DevOps Development services?
                        </p>
                        <div class="collapse" id="question4">
                            <div class="card card-body">
                                The term DevOps is a combination of two words development and operations. It's an approach and methodology of the development process, in which programmers, testers, and system administrators can work together on a product for faster and efficient delivery.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Questions
