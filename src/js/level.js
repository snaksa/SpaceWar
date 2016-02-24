 /*
 * @param {number}  enemyFrequency    frequency of enemies
 * @param {number} enemySpeed      speed of enemies
 * @param {number} enemyBulletFrequency      frequency of enemy bullets
 * @param {number} enemyBulletSpeed  speed of enemy bullets
 * @param {number} enemyDamage damage that an enemy can handle
 * @param {number} backgroundSpeed background speed
 */
function Level(enemyFrequency, enemySpeed, enemyBulletFrequency, enemyBulletSpeed, enemyDamage, backgroundSpeed ){
	this.enemyFrequency = enemyFrequency;
	this.enemySpeed = enemySpeed;
	this.enemyBulletFrequency = enemyBulletFrequency;
	this.enemyBulletSpeed = enemyBulletSpeed;
	this.enemyDamage = enemyDamage;
	this.backgroundSpeed = backgroundSpeed;
}