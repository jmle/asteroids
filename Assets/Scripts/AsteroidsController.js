import System.Collections.Generic;

#pragma strict

// public member variables
public var largeAsteroid : GameObject;
public var mediumAsteroid : GameObject;
public var smallAsteroid : GameObject;
public var numberOfAsteroids : int;

// private member variables
private var asteroids : List.<GameObject>;
private var spawnPoints : Array;

function Start () {
	asteroids = new List.<GameObject>();
	spawnPoints = new Array ();
	
	// Populate spawnPoints. List of points starts at the top left:
	spawnPoints.Push (new Vector2 (-14, 12));
	spawnPoints.Push (new Vector2 (-5, 12));
	spawnPoints.Push (new Vector2 (5, 12));
	spawnPoints.Push (new Vector2 (14, 12));
	spawnPoints.Push (new Vector2 (14, 7));
	spawnPoints.Push (new Vector2 (14, -3));
	spawnPoints.Push (new Vector2 (14, -12));
	spawnPoints.Push (new Vector2 (5, -12));
	spawnPoints.Push (new Vector2 (-5, -12));
	spawnPoints.Push (new Vector2 (-14, -12));
	spawnPoints.Push (new Vector2 (-14, -3));
	spawnPoints.Push (new Vector2 (-14, 7));
}

function Update () {
	if (asteroids.Count < numberOfAsteroids) {
		asteroids.Add (SpawnAsteroid ());
	}
}

function SpawnAsteroid () {
	// Get a random position for the asteroid
	var index : int = Mathf.Round (Random.Range (0, 11));
	var pos : Vector2 = spawnPoints[index];

	// Get a random size for the asteroid
	var size : int = Mathf.Round (Random.Range (1, 3));
	var asteroid : GameObject;
	
	// Generate type of asteroid depending on the random number.
	switch (size) {
		case 1:
			asteroid = Instantiate (smallAsteroid, pos, Quaternion.identity);
			break;
		case 2:
			asteroid = Instantiate (mediumAsteroid, pos, Quaternion.identity);
			break;
		case 3:
			asteroid = Instantiate (largeAsteroid, pos, Quaternion.identity);
			break;
		default:
			break;
	}
	
	return asteroid;
}

 