var projects = [
	{
	  intro:"",
	  img:""
	},
	
	{
	  intro:"",
	  img:""
	},
	{
	  intrp:"",
	  img:""
	},
	
	];
	
function createProjects(projects, Selector){
	let pro= document.querySelector(Selector);
	if (pro){
		if(projects instanceof Array){
		  for (let project of projects){
			// You will add your content here for
			var intro = project.intro;
			var img = project.cover;
			let html = "<span class=\"intro\">" + intro + "</span>  <img class=\"intro_image\" src=\""+ img +"\" alt=\"Project images\">"
			let container = document.createElement("div");
			container.className="project";
			container.innerHTML = html;
			container.tabIndex = projects.indexOf(project);
			shelf.append(container);
		  }
		}
	}	
}
	