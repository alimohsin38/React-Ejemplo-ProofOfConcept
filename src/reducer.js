export const reducer = (state=0, action) => {
	switch(action.type){
		case true:
			return state = 1;
			
		case false:
			return state = 0;
			
		case "Valid":
			return state = {valid: true, email: action.emailAddress};
			
		case "notValid":
			return state = {valid: false, email: action.emailAddress};
			
		case "signup":
			return state = 2;
			
		case "aerobics":
			return state = 3;
			
		case "swimming":
			return state = 4;
		
		case "yoga package":
			return state = 5;
		
		case "kick boxing":
			return state = 6;
		default:
			return state;
	}
}