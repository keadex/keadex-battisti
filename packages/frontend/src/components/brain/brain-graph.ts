import { ForceGraph } from "../../model/models";

const brainGraph : ForceGraph.Graph = {
  "nodes": [
    {
      "id": "occipital-lobe",
      "name": "occipital lobe",
      "val": 40,
      "group": 1
    },
    {
      "id": "temporal-lobe",
      "name": "temporal lobe",
      "val": 40,
      "group": 2
    },
    {
      "id": "parietal-lobe",
      "name": "parietal lobe",
      "val": 40,
      "group": 3
    },
    {
      "id": "cerebellum",
      "name": "cerebellum",
      "val": 40,
      "group": 4
    },
    {
      "id": "frontal-lobe",
      "name": "frontal lobe",
      "val": 40,
      "group": 5
    },
    {
      "id": "colour",
      "name": "colour",
      "val": 1,
      "group": 1
    },
    {
      "id": "shape",
      "name": "shape",
      "val": 1,
      "group": 1
    },
    {
      "id": "distance",
      "name": "distance",
      "val": 1,
      "group": 1
    },
    {
      "id": "understading",
      "name": "understading",
      "val": 1,
      "group": 2
    },
    {
      "id": "language",
      "name": "language",
      "val": 1,
      "group": 2
    },
    {
      "id": "hearing",
      "name": "hearing",
      "val": 1,
      "group": 2
    },
    {
      "id": "speach",
      "name": "speach",
      "val": 1,
      "group": 2
    },
    {
      "id": "memory",
      "name": "memory",
      "val": 1,
      "group": 2
    },
    {
      "id": "learning",
      "name": "learning",
      "val": 1,
      "group": 2
    },
    {
      "id": "recog-sensation",
      "name": "recognising\nsensation",
      "val": 1,
      "group": 3
    },
    {
      "id": "recog-body-position",
      "name": "recognising\nbody position",
      "val": 1,
      "group": 3
    },
    {
      "id": "recog-objects",
      "name": "recognising\nobjects",
      "val": 1,
      "group": 3
    },
    {
      "id": "sense-of-time",
      "name": "sense\nof time",
      "val": 1,
      "group": 3
    },
    {
      "id": "sense-of-space",
      "name": "sense\nof space",
      "val": 1,
      "group": 3
    },
    {
      "id": "reading",
      "name": "reading",
      "val": 1,
      "group": 3
    },
    {
      "id": "comprehension-area",
      "name": "comprehension\narea",
      "val": 1,
      "group": 3
    },
    {
      "id": "balance",
      "name": "balance",
      "val": 1,
      "group": 4
    },
    {
      "id": "muscular-co-ordinator",
      "name": "muscular\nco-ordinator",
      "val": 1,
      "group": 4
    },
    {
      "id": "planning",
      "name": "planning",
      "val": 1,
      "group": 5
    },
    {
      "id": "reasoning",
      "name": "reasoning",
      "val": 1,
      "group": 5
    },
    {
      "id": "problem-solving",
      "name": "problem\nsolving",
      "val": 1,
      "group": 5
    },
    {
      "id": "morality",
      "name": "morality",
      "val": 1,
      "group": 5
    },
    {
      "id": "personality",
      "name": "personality",
      "val": 1,
      "group": 5
    },
    {
      "id": "social-skills",
      "name": "social\nskills",
      "val": 1,
      "group": 5
    },
    {
      "id": "recog-emotions",
      "name": "recognising\nemotions",
      "val": 1,
      "group": 5
    },
    {
      "id": "regulating-emotions",
      "name": "regulating\nemotions",
      "val": 1,
      "group": 5
    },
    {
      "id": "motor-functions",
      "name": "motor\nfunctions",
      "val": 1,
      "group": 5
    },
    {
      "id": "motor-speech",
      "name": "motor\nspeech",
      "val": 1,
      "group": 5
    }
  ],
    "links": [
      {
        "source": "frontal-lobe",
        "target": "parietal-lobe"
      },
      {
        "source": "frontal-lobe",
        "target": "temporal-lobe"
      },
      {
        "source": "parietal-lobe",
        "target": "occipital-lobe"
      },
      {
        "source": "temporal-lobe",
        "target": "occipital-lobe"
      },
      {
        "source": "cerebellum",
        "target": "temporal-lobe"
      },
      {
        "source": "cerebellum",
        "target": "occipital-lobe"
      },
      {
        "source": "temporal-lobe",
        "target": "parietal-lobe"
      },
      {
        "source": "occipital-lobe",
        "target": "colour"
      },
      {
        "source": "occipital-lobe",
        "target": "shape"
      },
      {
        "source": "occipital-lobe",
        "target": "distance"
      },
      {
        "source": "temporal-lobe",
        "target": "understading"
      },
      {
        "source": "temporal-lobe",
        "target": "language"
      },
      {
        "source": "temporal-lobe",
        "target": "hearing"
      },
      {
        "source": "temporal-lobe",
        "target": "speach"
      },
      {
        "source": "temporal-lobe",
        "target": "memory"
      },
      {
        "source": "temporal-lobe",
        "target": "learning"
      },
      {
        "source": "parietal-lobe",
        "target": "recog-sensation"
      },
      {
        "source": "parietal-lobe",
        "target": "recog-body-position"
      },
      {
        "source": "parietal-lobe",
        "target": "recog-objects"
      },
      {
        "source": "parietal-lobe",
        "target": "sense-of-time"
      },
      {
        "source": "parietal-lobe",
        "target": "sense-of-space"
      },
      {
        "source": "parietal-lobe",
        "target": "reading"
      },
      {
        "source": "parietal-lobe",
        "target": "comprehension-area"
      },
      {
        "source": "cerebellum",
        "target": "balance"
      },
      {
        "source": "cerebellum",
        "target": "muscular-co-ordinator"
      },
      {
        "source": "frontal-lobe",
        "target": "planning"
      },
      {
        "source": "frontal-lobe",
        "target": "reasoning"
      },
      {
        "source": "frontal-lobe",
        "target": "problem-solving"
      },
      {
        "source": "frontal-lobe",
        "target": "morality"
      },
      {
        "source": "frontal-lobe",
        "target": "personality"
      },
      {
        "source": "frontal-lobe",
        "target": "social-skills"
      },
      {
        "source": "frontal-lobe",
        "target": "recog-emotions"
      },
      {
        "source": "frontal-lobe",
        "target": "regulating-emotions"
      },
      {
        "source": "frontal-lobe",
        "target": "motor-functions"
      },
      {
        "source": "frontal-lobe",
        "target": "motor-speech"
      }
    ]
}

export default brainGraph;