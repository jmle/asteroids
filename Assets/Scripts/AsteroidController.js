#pragma strict

// public member variables
public var size : int;

// private member variables
private var asteroidsController : AsteroidsController;


function Start () {
	asteroidsController = GameObject.FindGameObjectWithTag ("AsteroidsController").GetComponent (typeof AsteroidsController);
	
	// Add random force towards somewhere near center of the screen
	var forceDirection : Vector2 = new Vector2 (0, 0) - transform.position;
	rigidbody2D.AddForce (forceDirection * 10);
}

function Update () {
	
}

function OnCollisionEnter2D (col : Collision2D) {
	if (col.gameObject.CompareTag ("Misile")) {
		// Destroy misile and destroy/break asteroids
		GameObject.Destroy (col.gameObject);
		DestroyOrBreak ();
	} else if (col.gameObject.CompareTag ("Limit")) {
		Destroy (gameObject);
	}
}

function DestroyOrBreak () {
	// The current asteroid is always destroyed.
	GameObject.Destroy (gameObject);
	
	switch (size) {
		case 1: break;
			
		case 2:
			// Size 2: create two 1-sized asteroids:
			
			break;
			
		case 3:
			// Size 3: create two 2-sized asteroids:
		
			break;

		default:
			break;
	}
}