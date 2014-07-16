#pragma strict

// public member variables
public var limitType : LimitType;

function OnCollisionEnter2D (col : Collision2D) {
	var go : GameObject = col.gameObject;
	var newPosition : Vector2 = new Vector2();
	
	// Depending on the position of the limit, the colliding object will be positioned
	// on the opposite side of the corresponding limit:
	switch (limitType) {
		case LimitType.RIGHT:	// Move to the left
			newPosition.x = -9;
			newPosition.y = go.transform.position.y;
			break;
			
		case LimitType.LEFT:	// Move to the right
			newPosition.x = 9;
			newPosition.y = go.transform.position.y;
			break;
			
		case LimitType.TOP:		// Move to bottom
			newPosition.y = -9;
			newPosition.x = go.transform.position.x;
			break;
			
		case LimitType.BOTTOM:	// Move to top
			newPosition.y = 9;
			newPosition.x = go.transform.position.x;
			break;
			
		default:
			break;
	}
	
	go.transform.position = newPosition;
}

public enum LimitType {
	RIGHT, LEFT, TOP, BOTTOM
}