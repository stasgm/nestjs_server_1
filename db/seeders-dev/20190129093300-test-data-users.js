const sql = `
    create extension if not exists "uuid-ossp";

    insert into public."user"(
        "id",
        "email",
        "password",
        "first_name",
        "last_name",
        "gender",
        "birthday",
        "created_at",
        "updated_at",
        "deleted_at"
    ) values (
        uuid_generate_v4(),
        'stasgm@gmail.com',
        '$2b$10$oXxMC8rBDB9z04wpOCHQP./S3IbPHjd.FStZsGgcfRdmlRt8so9MK',
        'Stas',
        'Shl',
        'male',
        '1982-07-18',
        'now()',
        'now()',
        null
    );
`;

module.exports = {
    up: (queryInterface) => queryInterface.sequelize.query(sql),
    down: () => {},
};
