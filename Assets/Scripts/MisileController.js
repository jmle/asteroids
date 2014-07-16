#pragma strict

// public member variables
public var speed : float;
public var lifeTime : float;

// private member variables
private var velocity : Vector3;
private var lifeCounter : float;

function Awake () {
	velocity = new Vector3 ();
	lifeCounter = lifeTime;
}

function FixedUpdate () {
	// Translate the object according to a given velocity, relative to
	// its local coordinates (Space.Self):
	velocity.y = speed * Time.deltaTime;
	transform.Translate (velocity, Space.Self);
	
	// Update life counter and destroy misile if it reached 0
	lifeCounter -= Time.deltaTime;
	if (lifeCounter <= 0) {
		Destroy (gameObject);
	}
}
