import React from 'react';

class Article extends React.Component{
    render(){
        const {item} = this.props;
        return(
			<figure className="reco-article">
            <img src={require(`static/menus/dish/${item.image}`)} alt={item.title}/>
                <figcaption>
                    <h3>{item.title}</h3>
                    <h5>{item.subtitle}</h5>
                </figcaption><a href={item.link}></a>
            </figure>
        );
    }
}

export default Article;