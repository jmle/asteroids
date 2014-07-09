#pragma strict

// public member variables
public var rotationSpeed : float;
public var translationSpeed : float;
public var misilePosY : float;

public var leftImpulse : GameObject;
public var rightImpulse : GameObject;
public var misilePrefab : GameObject;

// private member variables
private var acceleration : float = 0;
private var lastVelocity : float = 0;

function Start () {
	leftImpulse.SetActive (false);
	rightImpulse.SetActive (false);
}

function Update () {
	var vAxis : float = Input.GetAxis ("Vertical");
	var hAxis : float = - Input.GetAxis ("Horizontal");
	
	// Ship movement
	transform.Rotate (0, 0, hAxis * rotationSpeed, Space.Self);
	if (vAxis > 0) {
		rigidbody2D.AddRelativeForce (new Vector2 (0, vAxis * translationSpeed));
	}
	
	// Set impulses
	if (Input.GetButton ("Up")) {
		leftImpulse.SetActive (true);
		rightImpulse.SetActive (true);
	} else {
		leftImpulse.SetActive (false);
		rightImpulse.SetActive (false);
	}
	
	// Instantiate misile
	if (Input.GetButtonDown ("Jump")) {
		var a : GameObject = Instantiate(misilePrefab, transform.TransformPoint (0, misilePosY, 0), 
										 transform.rotation) as GameObject;
	}
	
}
