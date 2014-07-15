#pragma strict

// public member variables
public var speed : float;

// private member variables
private var velocity : Vector3;

function Start () {
	velocity = new Vector3 ();
}

function FixedUpdate () {
	// Translate the object according to a given velocity, relative to
	// its local coordinates (Space.Self):
	velocity.y = speed * Time.deltaTime;
	transform.Translate (velocity, Space.Self);
}

function OnCollisionEnter2D (col : Collision2D) {
	if (col.gameObject.CompareTag ("Limit")) {
		Destroy(gameObject);
	}
}