/*
<article class="employee">
    <header class="employee__name">
        <h1>Rainu Ittycheriah</h1>
    </header>
    <section class="employee__department">
        Works in the IT department
    </section>
    <section class="employee__computer">
        Currently using a 2015 MacBook Pro
    </section>
</article>
*/

const displayContainer = document.querySelector("#display-container");

const buildHtmlElement = (element, elementClass, elementTextContent) => {
    const htmlElement = document.createElement(element);
    
    if(elementClass){ // if the element has a class, set class attribute
        htmlElement.classList = elementClass;
    }
    if(elementTextContent){ // if the element has textContent, set it
        htmlElement.textContent = elementTextContent;
    }
    return htmlElement;
}

const buildDisplayContainer = (employeeArray) => {
    console.log(employeeArray);
    const mainArticleContainer = buildHtmlElement("article", "employee", undefined);
    const articleDomFrag = document.createDocumentFragment();
    employeeArray.forEach(employeeObj => {
        const headerTag = buildHtmlElement("header", "employee__name", undefined);
        const h1Tag = buildHtmlElement("h1", undefined, `${employeeObj.name}`);
    
        headerTag.appendChild(h1Tag);
        articleDomFrag.appendChild(headerTag);
    
    
        const deptSection = buildHtmlElement("section", "employee__department",`Works in ${employeeObj.department.dept}`);
        const compSection = buildHtmlElement("section", "employee__computer", `Currently using a ${employeeObj.computer.device}`);
    
        articleDomFrag.appendChild(deptSection);
        articleDomFrag.appendChild(compSection);
    });
    
    mainArticleContainer.appendChild(articleDomFrag);
    displayContainer.appendChild(mainArticleContainer);
}