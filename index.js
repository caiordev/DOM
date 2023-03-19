function addcontact() {
  const contactSection = document.getElementById("contact-list");

  const h3 = document.createElement("h3");
  h3.innerText = "contato";
  const ul = document.createElement("ul");
  const nameli = document.createElement("li");
  nameli.innerText = "nome: ";
  const nameinput = document.createElement("input");
  nameinput.type = "text";
  nameinput.name = "fullname";
  nameli.appendChild(nameinput);
  ul.appendChild(nameli);

  const phoneli = document.createElement("li");
  phoneli.innerText = "telefone: ";
  const phoneinput = document.createElement("input");
  phoneinput.type = "text";
  phoneinput.name = "fullname";
  phoneli.appendChild(phoneinput);
  ul.appendChild(phoneli);

  const addressli = document.createElement("li");
  addressli.innerHTML = '<label for = "address"> Endereço : </label>';
  const addressinput = document.createElement("input");
  addressinput.type = "text";
  addressinput.name = "address";
  addressinput.id = "address";
  addressli.appendChild(addressinput);
  ul.appendChild(addressli);

  contactSection.append(h3, ul);
}

function removecontact() {
  const contactSection = document.getElementById("contact-list");
  const title = document.getElementsByTagName("h3");
  const contacts = document.getElementsByTagName("ul");
  contactSection.removeChild(title[title.length - 1]);
  contactSection.removeChild(contacts[contacts.length - 1]);
}
