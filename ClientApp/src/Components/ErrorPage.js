import React from 'react'
import {Link} from 'react-router-dom'

function ErrorPage() {
  return (
    <section className="section-404">
        <div className="container">
            <div className="rowError">
                <div className="col-lg-12">
                    <div className="text-404">
                        <h1>404</h1>
                        <h3>Opps! This page Could Not Be Found!</h3>
                        <p>Sorry but the page you are looking for does not exist, have been removed or name changed</p>
                        <form action="#" className="search-404">
                            <input type="text" placeholder="Enter your keyword"/>
                            <button type="submit"><i className="fa fa-search"></i></button>
                        </form>
                        <Link to="/"><i className="fa fa-home"></i> Go back home</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ErrorPage