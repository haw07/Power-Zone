import React from 'react'
import {Link} from 'react-router-dom'

function ErrorPage() {
  return (
    <section class="section-404">
        <div class="container">
            <div class="rowError">
                <div class="col-lg-12">
                    <div class="text-404">
                        <h1>404</h1>
                        <h3>Opps! This page Could Not Be Found!</h3>
                        <p>Sorry but the page you are looking for does not exist, have been removed or name changed</p>
                        <form action="#" class="search-404">
                            <input type="text" placeholder="Enter your keyword"/>
                            <button type="submit"><i class="fa fa-search"></i></button>
                        </form>
                        <Link to="/"><i class="fa fa-home"></i> Go back home</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ErrorPage