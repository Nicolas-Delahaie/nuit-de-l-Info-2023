<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use App\Models\Reponse;
use App\Models\Question;
use App\Models\Quizz;
use App\Models\Participer;
use App\Models\ReponseQuestion;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        $faker = Faker::create();


        /* -------------------------------------------------------------------------- */
        /*                                    USER                                    */
        /* -------------------------------------------------------------------------- */
        $user = [
            ["pseudo" => "root", "password" => bcrypt("root")],
            ["pseudo" => "root1", "password" => bcrypt("root")],
            ["pseudo" => "root2", "password" => bcrypt("root")],
            ["pseudo" => "root3", "password" => bcrypt("root")]
        ];
        foreach ($user as $val) {
            \App\Models\User::create($val);
        }

        /* -------------------------------------------------------------------------- */
        /*                                 CATEGORIES                                 */
        /* -------------------------------------------------------------------------- */

        $categories = [
            ["nom" => "climat"],
            ["nom" => "gaz à effet de serre"],
            ["nom" => "environnement"],
            ["nom" => "déchets"],
            ["nom" => "déforestation"]
        ];
        foreach ($categories as $categorie) {
            \App\Models\Categorie::create($categorie);
        }

        /* -------------------------------------------------------------------------- */
        /*                             REPONSES CATEGORIES                            */
        /* -------------------------------------------------------------------------- */
        $reponses_categories = [
            // REPONSE 1
            [
                "reponse_id" => 1,
                "categorie_id" => 1
            ],
            [
                "reponse_id" => 1,
                "categorie_id" => 2
            ],
            // REPONSE 2
            [
                "reponse_id" => 2,
                "categorie_id" => 1
            ],
            [
                "reponse_id" => 2,
                "categorie_id" => 2
            ],
            // REPONSE 3
            [
                "reponse_id" => 3,
                "categorie_id" => 1
            ],
            // REPONSE 4
            [
                "reponse_id" => 4,
                "categorie_id" => 1
            ],
            // REPONSE 5
            [
                "reponse_id" => 5,
                "categorie_id" => 3
            ],
            [
                "reponse_id" => 5,
                "categorie_id" => 4
            ],
            // REPONSE 6
            [
                "reponse_id" => 6,
                "categorie_id" => 3
            ],
            [
                "reponse_id" => 6,
                "categorie_id" => 4
            ],
            // REPONSE 7
            [
                "reponse_id" => 7,
                "categorie_id" => 3
            ],
            [
                "reponse_id" => 7,
                "categorie_id" => 4
            ],
            // REPONSE 8
            [
                "reponse_id" => 8,
                "categorie_id" => 3
            ],
            [
                "reponse_id" => 8,
                "categorie_id" => 4
            ],
            // REPONSE 9
            [
                "reponse_id" => 9,
                "categorie_id" => 1
            ],
            [
                "reponse_id" => 9,
                "categorie_id" => 5
            ],
            // REPONSE 10
            [
                "reponse_id" => 10,
                "categorie_id" => 1
            ],
            [
                "reponse_id" => 10,
                "categorie_id" => 5
            ],
            // REPONSE 11
            [
                "reponse_id"
            ]
        ];

        /* -------------------------------------------------------------------------- */
        /*                                  REPONSES                                  */
        /* -------------------------------------------------------------------------- */
        $reponses = [
            [
                "titre" => "Dioxyde de carbone (CO2)",
                "description" => "Le dioxyde de carbone est un gaz à effet de serre, mais n'est pas le principal responsable.",
            ],
            [
                "titre" => "Méthane (CH4)",
                "description" => "Le méthane est un puissant gaz à effet de serre, contribuant au réchauffement climatique.",
            ],
            [
                "titre" => "Oxygène (O2)",
                "description" => "L'oxygène n'est pas un gaz à effet de serre et ne contribue pas au réchauffement climatique.",
            ],
            [
                "titre" => "Azote (N2)",
                "description" => "L'azote n'est pas un gaz à effet de serre et ne contribue pas au réchauffement climatique.",
            ],
            [
                "titre" => "Réparer",
                "description" => "Réparer est une des règles des 3R, mais ce n'est pas la première.",
            ],
            [
                "titre" => "Réutiliser",
                "description" => "Réutiliser est une des règles des 3R, mais ce n'est pas la première.",
            ],
            [
                "titre" => "Réduire",
                "description" => "Réduire est la première règle des 3R pour la réduction des déchets.",
            ],
            [
                "titre" => "Recycler",
                "description" => "Recycler est une des règles des 3R, mais ce n'est pas la première.",
            ],
            [
                "titre" => "Augmentation des températures",
                "description" => "La déforestation contribue à l'augmentation des températures.",
            ],
            [
                "titre" => "Diminution des températures",
                "description" => "La déforestation ne conduit généralement pas à une diminution des températures.",
            ],
            [
                "titre" => "Stagnation des températures",
                "description" => "La déforestation a tendance à contribuer à l'augmentation des températures plutôt qu'à la stagnation.",
            ],
            [
                "titre" => "Aucun impact sur les températures",
                "description" => "La déforestation a un impact sur les températures.",
            ]
        ];

        foreach ($reponses as $reponse) {
            Reponse::create($reponse);
        }

        /* -------------------------------------------------------------------------- */
        /*                                  QUESTIONS                                 */
        /* -------------------------------------------------------------------------- */
        $questions = [
            [
                "type" => "choix_multiple",
                "score" => 4,
                "difficulte" => "difficile",
                "image" => "chemin/vers/image3.jpg",
                "libelle" => "Quel est l'impact de la déforestation sur le climat ?",
                "quizz_id" => 1
            ],
            [
                "type" => "choix_unique",
                "score" => 3,
                "difficulte" => "facile",
                "image" => "chemin/vers/image2.jpg",
                "libelle" => "Quelle est la première règle des 3R pour la réduction des déchets ?",
                "quizz_id" => 1
            ],
            [
                "type" => "choix_multiple",
                "score" => 5,
                "difficulte" => "moyen",
                "image" => "chemin/vers/image1.jpg",
                "libelle" => "Quel gaz est le principal responsable du réchauffement climatique ?",
                "quizz_id" => 1
            ]
        ];

        foreach ($questions as $question) {
            Question::create($question);
        }


        /* -------------------------------------------------------------------------- */
        /*                             REPONSES QUESTIONS                             */
        /* -------------------------------------------------------------------------- */
        $reponses_questions = [
            // QUESTION 1
            [
                "estBonneQuestion" => false,
                "niveauPertinence" => 4,
                "reponse_id" => 1,
                "question_id" => 1
            ],
            [
                "estBonneQuestion" => true,
                "niveauPertinence" => 4,
                "reponse_id" => 2,
                "question_id" => 1
            ],
            [
                "estBonneQuestion" => false,
                "niveauPertinence" => 4,
                "reponse_id" => 3,
                "question_id" => 1
            ],
            [
                "estBonneQuestion" => false,
                "niveauPertinence" => 4,
                "reponse_id" => 4,
                "question_id" => 1
            ],

            // QUESTION 2
            [
                "estBonneQuestion" => false,
                "niveauPertinence" => 4,
                "reponse_id" => 5,
                "question_id" => 2
            ],
            [
                "estBonneQuestion" => false,
                "niveauPertinence" => 4,
                "reponse_id" => 6,
                "question_id" => 2
            ],
            [
                "estBonneQuestion" => true,
                "niveauPertinence" => 4,
                "reponse_id" => 7,
                "question_id" => 2
            ],
            [
                "estBonneQuestion" => false,
                "niveauPertinence" => 4,
                "reponse_id" => 8,
                "question_id" => 2
            ],

            // QUESTION 3
            [
                "estBonneQuestion" => true,
                "niveauPertinence" => 4,
                "reponse_id" => 9,
                "question_id" => 3
            ],
            [
                "estBonneQuestion" => false,
                "niveauPertinence" => 4,
                "reponse_id" => 10,
                "question_id" => 3
            ],
            [
                "estBonneQuestion" => false,
                "niveauPertinence" => 4,
                "reponse_id" => 11,
                "question_id" => 3
            ],
            [
                "estBonneQuestion" => false,
                "niveauPertinence" => 4,
                "reponse_id" => 12,
                "question_id" => 3
            ]
        ];
        foreach ($reponses_questions as $reponse_question) {
            Question::create($reponse_question);
        }


        /* -------------------------------------------------------------------------- */
        /*                                    QUIZZ                                   */
        /* -------------------------------------------------------------------------- */
        Quizz::create(["dateCreation" => "2021-01-01"]);

    }
}
