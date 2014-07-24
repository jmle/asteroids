#pragma strict

// public member variables
public var mediumAsteroid : GameObject;
public var smallAsteroid : GameObject;
public var explosion : GameObject;
public var size : int;
public var speed : float;
public var velIncrease : float;

// private member variables
private var direction : Vector2;

function Start () {
	if (size == 3) {
		direction.x = Random.Range (-1.0f, 1.0f);
		direction.y = Random.Range (-1.0f, 1.0f);
		direction = direction.normalized;
	} else {
		direction = rigidbody2D.velocity.normalized;
		
		// Add small change
		var changeX : float = Random.Range (-0.5f, 0.5f);
		var changeY : float = Random.Range (-0.5f, 0.5f);
		direction.x += changeX;
		direction.y += changeY;
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
	} else if (col.gameObject.CompareTag ("Ship")) {
		var explosion : GameObject = Instantiate (explosion, col.gameObject.transform.position, Quaternion.identity);
		Destroy (col.gameObject);
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
		
		asteroid.rigidbody2D.velocity = rigidbody2D.velocity; // Inherit velocity from parent.
	}
}







