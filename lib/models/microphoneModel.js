const pool = require('../utils/pool');

class Microphone {
  id;
  model;
  brand;
  pattern;
  microphoneType;
  price;
  summary;
  awesome;

  constructor(row) {
    this.id = row.id;
    this.model = row.model;
    this.brand = row.brand;
    this.pattern = row.pattern;
    this.microphoneType = row.microphone_type;
    this.price = row.price;
    this.summary = row.summary;
    this.awesome = row.awesome;

  }
  static async insert(microphone) {
    const { rows } = await pool.query(`INSERT INTO microphones 
    (model, brand, pattern, microphone_type, price, summary, awesome) 
    VALUES ($1, $2, $3, $4, $5, $6, $7) 
    RETURNING *`,
    [microphone.model, microphone.brand, microphone.pattern, microphone.microphoneType,
      microphone.price, microphone.summary, microphone.awesome]);
    
    return new Microphone(rows[0]);
  }
}
module.exports = Microphone;
