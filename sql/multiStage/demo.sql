
WITH
__time AS (

SELECT (
		NOW()
--	,	('2022-01-01')::DATE
	) - INTERVAL '0 month'
LIMIT 1

),
__data_1 AS ( SELECT (DATE_TRUNC('month',(SELECT * FROM __time) - INTERVAL '0 month') - INTERVAL '1 day')::DATE ),
__data_2 AS ( SELECT (DATE_TRUNC('month',(SELECT * FROM __time) - INTERVAL '1 month') - INTERVAL '1 day')::DATE ),
__data_3 AS ( SELECT (DATE_TRUNC('month',(SELECT * FROM __time) - INTERVAL '2 month') - INTERVAL '1 day')::DATE ),
__data_year AS ( SELECT (DATE_TRUNC('month',(SELECT * FROM __time) - INTERVAL '1 year') - INTERVAL '1 day')::DATE ),

_miesiace AS (

SELECT lp, t1.miesiac, nazwa_miesiac
FROM
    (
    VALUES
    (1,'styczeń'),
    (2,'luty'),
    (3,'marzec'),
    (4,'kwiecień'),
    (5,'maj'),
    (6,'czerwiec'),
    (7,'lipiec'),
    (8,'sierpień'),
    (9,'wrzesień'),
    (10,'październik'),
    (11,'listopad'),
    (12,'grudzień')
    ) t1 (miesiac,nazwa_miesiac),
    (
    VALUES
    (1, EXTRACT(MONTH from ( SELECT * FROM __data_1 ) ) ),
    (2, EXTRACT(MONTH from ( SELECT * FROM __data_2 ) ) ),
    (3, EXTRACT(MONTH from ( SELECT * FROM __data_3 ) ) ),
    (4, EXTRACT(MONTH from ( SELECT * FROM __data_year ) ) )
    ) t2 ( lp, miesiac )
WHERE t1.miesiac = t2.miesiac

),
_naglowki_kolumn AS (

SELECT
    NULL::NUMERIC AS "ID",
    nazwa_1 AS "Imię",
    nazwa_2 AS "Nazwisko",
    data_urodzenia AS "Data urodzenia",
    "%" || DATE(created_at) || '/' AS "Data utworzenia",
    NULL::FLOAT AS "kwota_k"
FROM tabela_demo_dwa
limit 1
)

SELECT * FROM  _naglowki_kolumn

UNION ALL

SELECT
    string_agg(DISTINCT id::TEXT, ',') AS "ID",
    string_agg(DISTINCT imie, ',') AS "Imię",
    string_agg(DISTINCT nazwisko, ',') AS "Nazwisko",
    string_agg(DISTINCT data_urodzenia, ',') AS "Data urodzenia",
    created_at AS "Data utworzenia",
    SUM("kwota_k") OVER (PARTITION BY "ID" RANGE BETWEEN 2 PRECEDING AND 2 FOLLOWING) AS "kwota_k"
FROM tabela_demo td
JOIN tabela_bok use (imie, nazwisko)
LEFT JOIN tabela_lewa tl ON td.id = tl.id



