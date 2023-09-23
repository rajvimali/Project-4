import React, { useState } from 'react'
import '../components/style.css'

export function Menu() {
    const [data, setData] = useState(
        [
            {
                img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/b7/b3/eb/caption.jpg?w=1200&h=-1&s=1',
                name: 'Grilled Beef with potatoes',
                price : '$29',
                desc : 'Meat ,Potatoes,Rice,Tomatoe'


            }
        ]
    )
    return (

        <section class="ftco-section">
            <div class="container">
                <div class="row no-gutters justify-content-center mb-5 pb-2">
                    <div class="col-md-12 text-center heading-section ftco-animate">
                        <span class="subheading">Specialties</span>
                        <h2 class="mb-4">Our Menu</h2>
                    </div>
                </div>
                <div class="row d-flex align-items-stretch">
                    <div class="col-12  d-flex align-self-stretch">
                        <div class="menus ftco-animate align-items-stretch">
                            {data &&
                                data.map((data) => (
                            <div class="menu-img img">
                               <img src={data.img} alt="" width="100%" height="100%" />

                            </div>
                            ))}
                            {data && data.map((data) => (
                            <div class="text d-flex align-items-center">
                                <div>
                                    <div class="d-flex">
                                        <div class="one-half">
                                        <h3>{data.name}</h3>
                                        </div>
                                        <div class="one-forth">
                                            <span class="price">{data.price}</span>
                                        </div>
                                    </div>
                                    <p>{data.desc}</p>
                                </div>
                                    <p><a href="" class="btn btn-primary">Order now</a></p>
                            </div>
                            ))}
                        </div>
                    </div>
                    {/* <div class="col-md-12 col-lg-6 d-flex align-self-stretch">
                        <div class="menus d-sm-flex ftco-animate align-items-stretch">
                            <div class="menu-img img" style="background-image: url(images/breakfast-2.jpg);"></div>
                            <div class="text d-flex align-items-center">
                                <div>
                                    <div class="d-flex">
                                        <div class="one-half">
                                            <h3>Grilled Beef with potatoes</h3>
                                        </div>
                                        <div class="one-forth">
                                            <span class="price">$29</span>
                                        </div>
                                    </div>
                                    <p><span>Meat</span>, <span>Potatoes</span>, <span>Rice</span>, <span>Tomatoe</span></p>
                                    <p><a href="#" class="btn btn-primary">Order now</a></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-12 col-lg-6 d-flex align-self-stretch">
                        <div class="menus d-sm-flex ftco-animate align-items-stretch">
                            <div class="menu-img img order-md-last" style="background-image: url(images/breakfast-3.jpg);"></div>
                            <div class="text d-flex align-items-center">
                                <div>
                                    <div class="d-flex">
                                        <div class="one-half">
                                            <h3>Grilled Beef with potatoes</h3>
                                        </div>
                                        <div class="one-forth">
                                            <span class="price">$29</span>
                                        </div>
                                    </div>
                                    <p><span>Meat</span>, <span>Potatoes</span>, <span>Rice</span>, <span>Tomatoe</span></p>
                                    <p><a href="#" class="btn btn-primary">Order now</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12 col-lg-6 d-flex align-self-stretch">
                        <div class="menus d-sm-flex ftco-animate align-items-stretch">
                            <div class="menu-img img order-md-last" style="background-image: url(images/breakfast-5.jpg);"></div>
                            <div class="text d-flex align-items-center">
                                <div>
                                    <div class="d-flex">
                                        <div class="one-half">
                                            <h3>Grilled Beef with potatoes</h3>
                                        </div>
                                        <div class="one-forth">
                                            <span class="price">$29</span>
                                        </div>
                                    </div>
                                    <p><span>Meat</span>, <span>Potatoes</span>, <span>Rice</span>, <span>Tomatoe</span></p>
                                    <p><a href="#" class="btn btn-primary">Order now</a></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-12 col-lg-6 d-flex align-self-stretch">
                        <div class="menus d-sm-flex ftco-animate align-items-stretch">
                            <div class="menu-img img" style="background-image: url(images/breakfast-6.jpg);"></div>
                            <div class="text d-flex align-items-center">
                                <div>
                                    <div class="d-flex">
                                        <div class="one-half">
                                            <h3>Grilled Beef with potatoes</h3>
                                        </div>
                                        <div class="one-forth">
                                            <span class="price">$29</span>
                                        </div>
                                    </div>
                                    <p><span>Meat</span>, <span>Potatoes</span>, <span>Rice</span>, <span>Tomatoe</span></p>
                                    <p><a href="#" class="btn btn-primary">Order now</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12 col-lg-6 d-flex align-self-stretch">
                        <div class="menus d-sm-flex ftco-animate align-items-stretch">
                            <div class="menu-img img" style="background-image: url(images/breakfast-2.jpg);"></div>
                            <div class="text d-flex align-items-center">
                                <div>
                                    <div class="d-flex">
                                        <div class="one-half">
                                            <h3>Grilled Beef with potatoes</h3>
                                        </div>
                                        <div class="one-forth">
                                            <span class="price">$29</span>
                                        </div>
                                    </div>
                                    <p><span>Meat</span>, <span>Potatoes</span>, <span>Rice</span>, <span>Tomatoe</span></p>
                                    <p><a href="#" class="btn btn-primary">Order now</a></p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    )
}
export default Menu;