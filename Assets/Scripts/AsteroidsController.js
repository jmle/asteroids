import System.Collections.Generic;

#pragma strict

// public member variables
public var largeAsteroid : GameObject;
public var numberOfAsteroids : int;
public var minimumSpawnDistance : float;

// private member variables
private var asteroids : List.<GameObject>;
private var spawnPoints : Array;

function Start () {
	asteroids = new List.<GameObject>();
	spawnPoints = new Array ();
}

function Update () {
	if (asteroids.Count <= numberOfAsteroids) {
		asteroids.Add (SpawnAsteroid ());
	}
}

function SpawnAsteroid () {
	// Get a random position for the asteroid
	var pos : Vector2 = Vector2.zero;
	
	while ((pos - Vector2.zero).magnitude < minimumSpawnDistance) {
		var x : float = Mathf.Round (Random.Range (-10, 10));
		var y : float = Mathf.Round (Random.Range (-10, 10));
		pos = new Vector2 (x, y);
	}
	
	var asteroid : GameObject = Instantiate (largeAsteroid, pos, Quaternion.identity) as GameObject;
	
	return asteroid;
}

 