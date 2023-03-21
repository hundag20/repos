/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async (knex) => {
    await knex.schema.createTable('header', (table) => {
        table.increments();
        table.string('title');
        table.string('description');
        table.timestamps();
    })
    await knex.schema.createTable('category', (table) => {
        table.increments();
        table.string('name');
        table.timestamps();
    })
    await knex.schema.createTable('project', (table) => {
        table.increments();
        table.string('title');
        table.string('link');
        table.string('description');
        table.string('category_ids');
        table.timestamps();
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {

};
