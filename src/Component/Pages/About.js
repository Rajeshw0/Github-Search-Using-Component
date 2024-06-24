import React, { Fragment } from 'react'

const About = () =>{
    return(
        <Fragment>
            <div>
                <h2> HEADING</h2>
                <p>Line 1:17:   'Component' is defined but never used
                                                  no-unused-vars
                        Line 27:7:   Redundant alt attribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or any specified custom words) in the alt prop  jsx-a11y/img-redundant-alt
                        Line 30:28:  Using target="_blank" without rel="noopener noreferrer" is a security risk: see https://mathiasbynens.github.io/rel-noopener
                                                                        react/jsx-no-target-blank

                        Search for the keywords to learn more about each warning.
                        To ignore, add // eslint-disable-next-line to the line before.

                </p>
            </div>
        </Fragment>
    )
}
export default About;