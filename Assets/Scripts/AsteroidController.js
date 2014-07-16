#pragma strict

// public member variables
public var mediumAsteroid : GameObject;
public var smallAsteroid : GameObject;
public var size : int;
public var speed : float;
public var velIncrease : float;

// private member variables
private var asteroidsController : AsteroidsController;
private var direction : Vector2;

function Start () {

}

function Awake () {
	asteroidsController = GameObject.FindGameObjectWithTag ("AsteroidsController").GetComponent (typeof AsteroidsController);
	
	if (size == 3) {
		// TODO: create random direction
		direction.x = Random.Range (-1.0f, 1.0f);
		direction.y = Random.Range (-1.0f, 1.0f);
		direction = direction.normalized;
	}
}

function FixedUpdate () {
	// TODO: increase velocity with time: rigidbody2D.velocity *= velIncrease;
	rigidbody2D.velocity = direction * speed;
}

function OnCollisionEnter2D (col : Collision2D) {
	if (col.gameObject.CompareTag ("Misile")) {
		// Destroy misile and destroy/break asteroids
		GameObject.Destroy (col.gameObject);
		DestroyOrBreak ();
	} else if (col.gameObject.CompareTag ("Limit")) {
		// TODO: move asteroid to other side of the screen
		Destroy (gameObject);
	}
}

function DestroyOrBreak () {
	if (size > 1) {
		InstantiateAsteroids (size);
	}
	
	// The current asteroid is always destroyed.
	GameObject.Destroy (gameObject);
}

function InstantiateAsteroids (size : int) {
	// Choose the prefab depending on the size of the breaking asteroid (2 or 3)
	var asteroidPrefabToUse : GameObject = (size == 2) ? smallAsteroid : mediumAsteroid;
	
	// Create asteroids:
	for (var i : int = 0; i < 2; i++) {
		var asteroid : GameObject = Instantiate (asteroidPrefabToUse, transform.position + new Vector2(i, i),
												 Quaternion.identity) as GameObject;
		//var randomVel : Vector2 = rigidbody2D.velocity.normalized;
		
		asteroid.rigidbody2D.velocity = rigidbody2D.velocity; // Inherit velocity from parent.
	}
}







