const about = document.querySelector('#about');
const contact = document.querySelector('#contact');
const aboutContent = document.querySelector('#about-content');
const contactContent = document.querySelector('#contact-content');


about.addEventListener('click', () => {
	const aboutBox = new WinBox({
		title: 'About Me',
		// modal: true,
		width: '400px',
		height: '400px',
		top: 50,
		right: 50,
		bottom: 50,
		// left: 50,
		// html: '<h1>Hello</h1>',
		mount: aboutContent,
		onfocus: function(){
			this.setBackground('#00aa00')
		},
		onblur: function(){
			this.setBackground('#777')
		}
	})
})

contact.addEventListener('click', () => {
	const contactBox = new WinBox({
		title: 'Contact Me',
		width: '400px',
		height: '400px',
		top: 150,
		right: 50,
		bottom: 50,
		left: 10,
		// html: '<h1>Hello</h1>',
		mount: contactContent,
		onfocus: function(){
			this.setBackground('#00aa00')
		},
		onblur: function(){
			this.setBackground('#777')
		}
	})
})