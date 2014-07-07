#pragma strict

// public member variables
public var rotationSpeed : float;
public var translationSpeed : float;

public var leftImpulse : GameObject;
public var rightImpulse : GameObject;

function Start () {
	leftImpulse.SetActive (false);
	rightImpulse.SetActive (false);
}

function Update () {
	var vAxis : float = Input.GetAxis ("Vertical");
	var hAxis : float = - Input.GetAxis ("Horizontal");
	
	// Ship movement
	transform.Rotate (0, 0, hAxis * rotationSpeed, Space.Self);
	//transform.Translate (0, vAxis * translationSpeed, 0, Space.Self);
	var forceVector : Vector2 = new Vector2 (0, vAxis * translationSpeed);
	transform.rigidbody2D.AddRelativeForce (forceVector);
	
}

