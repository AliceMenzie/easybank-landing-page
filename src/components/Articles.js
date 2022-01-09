import { StyledArticle } from "./styles/Article.styled"
import contentArticle from "./contentArticle"

export default function Article() {
    return (
        <StyledArticle>         
            <h1>Latest Articles</h1>
<div>
        {contentArticle.map((item, index) =>(
            <div key={index}>
                <img src={`./images/${item.image}`} alt=""/>
                <h6>By {item.author}</h6>
                <h3> {item.title}</h3>
                <p>{item.extract} ...</p>

                
               
                
            </div>
              
          ))}
        </div>
            
        </StyledArticle>
    )
}
