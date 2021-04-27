import React, { Component } from 'react'

export default class ImageSlider extends Component {
    constructor() {
        super()
        this.state = {
            currentSlideIndex: 0
        }
    }

    render() {
        let current_slide = this.state.currentSlideIndex
        return (
            <div>   
                <h1>I am on slide {current_slide}</h1>
            </div>
        )
    }
}

