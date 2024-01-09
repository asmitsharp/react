function customRender(reactElement, container) {
  /*
  const element = document.createElement(reactElement.type)
  element.innerHTML = reactElement.children
  element.setAttribute("href", reactElement.props.href)
  element.setAttribute("target", reactElement.target)

  container.appendChild(element)
*/

  const domElement = document.createElement(reactElement.type)
  domElement.innerHTML = reactElement.children
  for (const prop in reactElement.props) {
    if (prop === "children") continue
    domElement.setAttribute(prop, reactElement.props[prop])
  }
  container.appendChild(domElement)
}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google.",
}

const mainContainer = document.querySelector("#root")

customRender(reactElement, mainContainer)
