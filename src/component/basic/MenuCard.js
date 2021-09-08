import React from "react";

function MenuCard({menuData}) {
    return (
        <>
        <section className="main-card--cointainer">
            {
                menuData.map((currEle) => {
                    const{id,price,name,category,description,image}=currEle

                    return (
                        <>
                            <div className="card-container" key={id}>
                                <div className="card">
                                    <div className="card-body">
                                        <span className="card-number card-circle subtle">{id}</span>
                                        <span className="card-price subtle">{price}</span>
                                        <span className="card-author subtle">{category}</span>
                                        <h3 className="card-title">{name}</h3>
                                        <span className="card-description subtle">{description}</span>
                                        <div className="card-read">Read</div>
                                    </div>
                                    <img src={image} alt={name} className="card-media"></img>
                                </div>
                            </div>
                        </>
                    )

                })
            }
            </section>
        </>
    )
}

export default MenuCard;