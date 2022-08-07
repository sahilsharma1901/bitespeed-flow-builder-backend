const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

let flowData = {
  1234: [
    {
      id: "2dc7580f-aa9d-442a-a8c3-2465d18eb76c",
      name: "Flow 1",
      nodes: [
        {
          width: 160,
          height: 43,
          id: "f23f6816-7039-4ce8-930b-b0ab6e89a3b7",
          position: {
            x: 286.5,
            y: 176.75,
          },
          type: "textNode",
          data: {
            text: "Hello there",
            imgSrc: "",
            tags: [
              {
                id: "1d6a40dd-7b91-4d68-8e96-5093292fa203",
                name: "Keyword",
                isEditing: false,
              },
            ],
            criteria: "contains",
            label: "Main Menu",
            children: [],
          },
          style: {
            width: "max-content",
            backgroundColor: "white",
            boxShadow: "0 2px 3px 5px rgba(200, 200, 200, 0.3)",
            borderRadius: "4px",
          },
          selected: false,
          positionAbsolute: {
            x: 286.5,
            y: 176.75,
          },
          dragging: false,
        },
        {
          width: 160,
          height: 43,
          id: "492150d2-357b-4292-8cc8-91cde379ea8c",
          position: {
            x: 287.5,
            y: 287.75,
          },
          type: "textNode",
          data: {
            text: "Hi there",
            imgSrc: "",
            tags: [
              {
                id: "c5c81367-6a70-45ca-ae6f-421e45c76431",
                name: "Keyword",
                isEditing: false,
              },
            ],
            criteria: "contains",
            label: "Main Menu",
            children: [],
          },
          style: {
            width: "max-content",
            backgroundColor: "white",
            boxShadow: "0 2px 3px 5px rgba(200, 200, 200, 0.3)",
            borderRadius: "4px",
          },
          selected: false,
          positionAbsolute: {
            x: 287.5,
            y: 287.75,
          },
          dragging: false,
        },
        {
          width: 160,
          height: 93,
          id: "5309b0ac-bf28-45cd-a81e-9be58e7ba9e7",
          position: {
            x: 88.5,
            y: 72.25,
          },
          type: "quickReplyNode",
          data: {
            text: "quickReplyNode",
            imgSrc: "",
            tags: [
              {
                id: "6c539c3f-47ce-414a-8af5-2caee31aa03b",
                name: "Keyword",
                isEditing: false,
              },
            ],
            criteria: "contains",
            label: "Main Menu",
            children: [
              "4dc0886c-9e83-4e88-a4e3-23130cbad8a0",
              "cf75e6f2-b252-4327-ad75-c84fc50705bb",
            ],
          },
          style: {
            width: "max-content",
            backgroundColor: "white",
            boxShadow: "0 2px 3px 5px rgba(200, 200, 200, 0.3)",
            borderRadius: "4px",
            height: 93,
          },
          selected: false,
          positionAbsolute: {
            x: 88.5,
            y: 72.25,
          },
          dragging: false,
        },
        {
          width: 160,
          height: 68,
          id: "798376c4-e2b5-47ad-8dbb-48aabd0b31c7",
          position: {
            x: -77,
            y: 201,
          },
          type: "keywordNode",
          data: {
            text: "keywordNode",
            imgSrc: "",
            tags: [
              {
                id: "f9a1d4ac-fafe-488c-a53f-82f11aeeb226",
                name: "Hello",
                isEditing: false,
              },
              {
                id: "29a5ff1f-0e53-45ad-b0bd-bbed23375849",
                name: "Hi",
                isEditing: false,
              },
            ],
            criteria: "contains",
            label: "Main Menu",
            children: [],
          },
          style: {
            width: "max-content",
            backgroundColor: "white",
            boxShadow: "0 2px 3px 5px rgba(200, 200, 200, 0.3)",
            borderRadius: "4px",
          },
          selected: false,
          positionAbsolute: {
            x: -77,
            y: 201,
          },
          dragging: false,
        },
        {
          width: 150,
          height: 21,
          id: "4dc0886c-9e83-4e88-a4e3-23130cbad8a0",
          data: {
            text: "Test 1",
            isEditing: false,
          },
          position: {
            x: 5,
            y: 38,
          },
          type: "additionalQuickReplyNode",
          parentNode: "5309b0ac-bf28-45cd-a81e-9be58e7ba9e7",
          extent: "parent",
          draggable: false,
          style: {
            width: "9.4rem",
            pointerEvents: "none",
          },
          positionAbsolute: {
            x: 93.5,
            y: 110.25,
          },
        },
        {
          width: 150,
          height: 21,
          id: "cf75e6f2-b252-4327-ad75-c84fc50705bb",
          data: {
            text: "Test 2",
            isEditing: false,
          },
          position: {
            x: 5,
            y: 63,
          },
          type: "additionalQuickReplyNode",
          parentNode: "5309b0ac-bf28-45cd-a81e-9be58e7ba9e7",
          extent: "parent",
          draggable: false,
          style: {
            width: "9.4rem",
            pointerEvents: "none",
          },
          positionAbsolute: {
            x: 93.5,
            y: 135.25,
          },
        },
      ],
      edges: [
        {
          source: "798376c4-e2b5-47ad-8dbb-48aabd0b31c7",
          sourceHandle: null,
          target: "5309b0ac-bf28-45cd-a81e-9be58e7ba9e7",
          targetHandle: null,
          id: "reactflow__edge-798376c4-e2b5-47ad-8dbb-48aabd0b31c7-5309b0ac-bf28-45cd-a81e-9be58e7ba9e7",
        },
        {
          source: "4dc0886c-9e83-4e88-a4e3-23130cbad8a0",
          sourceHandle: null,
          target: "f23f6816-7039-4ce8-930b-b0ab6e89a3b7",
          targetHandle: null,
          id: "reactflow__edge-4dc0886c-9e83-4e88-a4e3-23130cbad8a0-f23f6816-7039-4ce8-930b-b0ab6e89a3b7",
        },
        {
          source: "cf75e6f2-b252-4327-ad75-c84fc50705bb",
          sourceHandle: null,
          target: "492150d2-357b-4292-8cc8-91cde379ea8c",
          targetHandle: null,
          id: "reactflow__edge-cf75e6f2-b252-4327-ad75-c84fc50705bb-492150d2-357b-4292-8cc8-91cde379ea8c",
        },
      ],
      viewport: {
        x: 203,
        y: -101.5,
        zoom: 2,
      },
    },
    {
      id: "2dc7580f-aa9d-442a-a8c3-2465d18eb754",
      name: "Flow 2",
      nodes: [
        {
          width: 160,
          height: 43,
          id: "f23f6816-7039-4ce8-930b-b0ab6e89a3b7",
          position: {
            x: 286.5,
            y: 176.75,
          },
          type: "textNode",
          data: {
            text: "Hello man",
            imgSrc: "",
            tags: [
              {
                id: "1d6a40dd-7b91-4d68-8e96-5093292fa203",
                name: "Keyword",
                isEditing: false,
              },
            ],
            criteria: "contains",
            label: "Main Menu",
            children: [],
          },
          style: {
            width: "max-content",
            backgroundColor: "white",
            boxShadow: "0 2px 3px 5px rgba(200, 200, 200, 0.3)",
            borderRadius: "4px",
          },
          selected: false,
          positionAbsolute: {
            x: 286.5,
            y: 176.75,
          },
          dragging: false,
        },
        {
          width: 160,
          height: 43,
          id: "492150d2-357b-4292-8cc8-91cde379ea8c",
          position: {
            x: 287.5,
            y: 287.75,
          },
          type: "textNode",
          data: {
            text: "Hi man",
            imgSrc: "",
            tags: [
              {
                id: "c5c81367-6a70-45ca-ae6f-421e45c76431",
                name: "Keyword",
                isEditing: false,
              },
            ],
            criteria: "contains",
            label: "Main Menu",
            children: [],
          },
          style: {
            width: "max-content",
            backgroundColor: "white",
            boxShadow: "0 2px 3px 5px rgba(200, 200, 200, 0.3)",
            borderRadius: "4px",
          },
          selected: false,
          positionAbsolute: {
            x: 287.5,
            y: 287.75,
          },
          dragging: false,
        },
        {
          width: 160,
          height: 93,
          id: "5309b0ac-bf28-45cd-a81e-9be58e7ba9e7",
          position: {
            x: 88.5,
            y: 72.25,
          },
          type: "quickReplyNode",
          data: {
            text: "quickReplyNode",
            imgSrc: "",
            tags: [
              {
                id: "6c539c3f-47ce-414a-8af5-2caee31aa03b",
                name: "Keyword",
                isEditing: false,
              },
            ],
            criteria: "contains",
            label: "Main Menu",
            children: [
              "4dc0886c-9e83-4e88-a4e3-23130cbad8a0",
              "cf75e6f2-b252-4327-ad75-c84fc50705bb",
            ],
          },
          style: {
            width: "max-content",
            backgroundColor: "white",
            boxShadow: "0 2px 3px 5px rgba(200, 200, 200, 0.3)",
            borderRadius: "4px",
            height: 93,
          },
          selected: false,
          positionAbsolute: {
            x: 88.5,
            y: 72.25,
          },
          dragging: false,
        },
        {
          width: 160,
          height: 68,
          id: "798376c4-e2b5-47ad-8dbb-48aabd0b31c7",
          position: {
            x: -77,
            y: 201,
          },
          type: "keywordNode",
          data: {
            text: "keywordNode",
            imgSrc: "",
            tags: [
              {
                id: "f9a1d4ac-fafe-488c-a53f-82f11aeeb226",
                name: "Hello M",
                isEditing: false,
              },
              {
                id: "29a5ff1f-0e53-45ad-b0bd-bbed23375849",
                name: "Hi M",
                isEditing: false,
              },
            ],
            criteria: "contains",
            label: "Main Menu",
            children: [],
          },
          style: {
            width: "max-content",
            backgroundColor: "white",
            boxShadow: "0 2px 3px 5px rgba(200, 200, 200, 0.3)",
            borderRadius: "4px",
          },
          selected: false,
          positionAbsolute: {
            x: -77,
            y: 201,
          },
          dragging: false,
        },
        {
          width: 150,
          height: 21,
          id: "4dc0886c-9e83-4e88-a4e3-23130cbad8a0",
          data: {
            text: "Test 1M",
            isEditing: false,
          },
          position: {
            x: 5,
            y: 38,
          },
          type: "additionalQuickReplyNode",
          parentNode: "5309b0ac-bf28-45cd-a81e-9be58e7ba9e7",
          extent: "parent",
          draggable: false,
          style: {
            width: "9.4rem",
            pointerEvents: "none",
          },
          positionAbsolute: {
            x: 93.5,
            y: 110.25,
          },
        },
        {
          width: 150,
          height: 21,
          id: "cf75e6f2-b252-4327-ad75-c84fc50705bb",
          data: {
            text: "Test 2M",
            isEditing: false,
          },
          position: {
            x: 5,
            y: 63,
          },
          type: "additionalQuickReplyNode",
          parentNode: "5309b0ac-bf28-45cd-a81e-9be58e7ba9e7",
          extent: "parent",
          draggable: false,
          style: {
            width: "9.4rem",
            pointerEvents: "none",
          },
          positionAbsolute: {
            x: 93.5,
            y: 135.25,
          },
        },
      ],
      edges: [
        {
          source: "798376c4-e2b5-47ad-8dbb-48aabd0b31c7",
          sourceHandle: null,
          target: "5309b0ac-bf28-45cd-a81e-9be58e7ba9e7",
          targetHandle: null,
          id: "reactflow__edge-798376c4-e2b5-47ad-8dbb-48aabd0b31c7-5309b0ac-bf28-45cd-a81e-9be58e7ba9e7",
        },
        {
          source: "4dc0886c-9e83-4e88-a4e3-23130cbad8a0",
          sourceHandle: null,
          target: "f23f6816-7039-4ce8-930b-b0ab6e89a3b7",
          targetHandle: null,
          id: "reactflow__edge-4dc0886c-9e83-4e88-a4e3-23130cbad8a0-f23f6816-7039-4ce8-930b-b0ab6e89a3b7",
        },
        {
          source: "cf75e6f2-b252-4327-ad75-c84fc50705bb",
          sourceHandle: null,
          target: "492150d2-357b-4292-8cc8-91cde379ea8c",
          targetHandle: null,
          id: "reactflow__edge-cf75e6f2-b252-4327-ad75-c84fc50705bb-492150d2-357b-4292-8cc8-91cde379ea8c",
        },
      ],
      viewport: {
        x: 203,
        y: -101.5,
        zoom: 2,
      },
    },
  ],
  5678: [
    {
      id: "2dc7580f-aa9d-442a-a8c3-2465d18eb74t",
      name: "Flow 11",
      nodes: [
        {
          width: 160,
          height: 43,
          id: "f23f6816-7039-4ce8-930b-b0ab6e89a3b7",
          position: {
            x: 286.5,
            y: 176.75,
          },
          type: "textNode",
          data: {
            text: "Hello there!",
            imgSrc: "",
            tags: [
              {
                id: "1d6a40dd-7b91-4d68-8e96-5093292fa203",
                name: "Keyword",
                isEditing: false,
              },
            ],
            criteria: "contains",
            label: "Main Menu",
            children: [],
          },
          style: {
            width: "max-content",
            backgroundColor: "white",
            boxShadow: "0 2px 3px 5px rgba(200, 200, 200, 0.3)",
            borderRadius: "4px",
          },
          selected: false,
          positionAbsolute: {
            x: 286.5,
            y: 176.75,
          },
          dragging: false,
        },
        {
          width: 160,
          height: 43,
          id: "492150d2-357b-4292-8cc8-91cde379ea8c",
          position: {
            x: 287.5,
            y: 287.75,
          },
          type: "textNode",
          data: {
            text: "Hi there!",
            imgSrc: "",
            tags: [
              {
                id: "c5c81367-6a70-45ca-ae6f-421e45c76431",
                name: "Keyword",
                isEditing: false,
              },
            ],
            criteria: "contains",
            label: "Main Menu",
            children: [],
          },
          style: {
            width: "max-content",
            backgroundColor: "white",
            boxShadow: "0 2px 3px 5px rgba(200, 200, 200, 0.3)",
            borderRadius: "4px",
          },
          selected: false,
          positionAbsolute: {
            x: 287.5,
            y: 287.75,
          },
          dragging: false,
        },
        {
          width: 160,
          height: 93,
          id: "5309b0ac-bf28-45cd-a81e-9be58e7ba9e7",
          position: {
            x: 48.5,
            y: 42.25,
          },
          type: "quickReplyNode",
          data: {
            text: "quickReplyNode",
            imgSrc: "",
            tags: [
              {
                id: "6c539c3f-47ce-414a-8af5-2caee31aa03b",
                name: "Keyword",
                isEditing: false,
              },
            ],
            criteria: "contains",
            label: "Main Menu",
            children: [
              "4dc0886c-9e83-4e88-a4e3-23130cbad8a0",
              "cf75e6f2-b252-4327-ad75-c84fc50705bb",
            ],
          },
          style: {
            width: "max-content",
            backgroundColor: "white",
            boxShadow: "0 2px 3px 5px rgba(200, 200, 200, 0.3)",
            borderRadius: "4px",
            height: 93,
          },
          selected: false,
          positionAbsolute: {
            x: 88.5,
            y: 72.25,
          },
          dragging: false,
        },
        {
          width: 160,
          height: 68,
          id: "798376c4-e2b5-47ad-8dbb-48aabd0b31c7",
          position: {
            x: -77,
            y: 201,
          },
          type: "keywordNode",
          data: {
            text: "keywordNode",
            imgSrc: "",
            tags: [
              {
                id: "f9a1d4ac-fafe-488c-a53f-82f11aeeb226",
                name: "Hello!",
                isEditing: false,
              },
              {
                id: "29a5ff1f-0e53-45ad-b0bd-bbed23375849",
                name: "Hi!",
                isEditing: false,
              },
            ],
            criteria: "contains",
            label: "Main Menu",
            children: [],
          },
          style: {
            width: "max-content",
            backgroundColor: "white",
            boxShadow: "0 2px 3px 5px rgba(200, 200, 200, 0.3)",
            borderRadius: "4px",
          },
          selected: false,
          positionAbsolute: {
            x: -77,
            y: 201,
          },
          dragging: false,
        },
        {
          width: 150,
          height: 21,
          id: "4dc0886c-9e83-4e88-a4e3-23130cbad8a0",
          data: {
            text: "Test 1",
            isEditing: false,
          },
          position: {
            x: 5,
            y: 38,
          },
          type: "additionalQuickReplyNode",
          parentNode: "5309b0ac-bf28-45cd-a81e-9be58e7ba9e7",
          extent: "parent",
          draggable: false,
          style: {
            width: "9.4rem",
            pointerEvents: "none",
          },
          positionAbsolute: {
            x: 93.5,
            y: 110.25,
          },
        },
        {
          width: 150,
          height: 21,
          id: "cf75e6f2-b252-4327-ad75-c84fc50705bb",
          data: {
            text: "Test 2",
            isEditing: false,
          },
          position: {
            x: 5,
            y: 63,
          },
          type: "additionalQuickReplyNode",
          parentNode: "5309b0ac-bf28-45cd-a81e-9be58e7ba9e7",
          extent: "parent",
          draggable: false,
          style: {
            width: "9.4rem",
            pointerEvents: "none",
          },
          positionAbsolute: {
            x: 93.5,
            y: 135.25,
          },
        },
      ],
      edges: [
        {
          source: "798376c4-e2b5-47ad-8dbb-48aabd0b31c7",
          sourceHandle: null,
          target: "5309b0ac-bf28-45cd-a81e-9be58e7ba9e7",
          targetHandle: null,
          id: "reactflow__edge-798376c4-e2b5-47ad-8dbb-48aabd0b31c7-5309b0ac-bf28-45cd-a81e-9be58e7ba9e7",
        },
        {
          source: "4dc0886c-9e83-4e88-a4e3-23130cbad8a0",
          sourceHandle: null,
          target: "f23f6816-7039-4ce8-930b-b0ab6e89a3b7",
          targetHandle: null,
          id: "reactflow__edge-4dc0886c-9e83-4e88-a4e3-23130cbad8a0-f23f6816-7039-4ce8-930b-b0ab6e89a3b7",
        },
        {
          source: "cf75e6f2-b252-4327-ad75-c84fc50705bb",
          sourceHandle: null,
          target: "492150d2-357b-4292-8cc8-91cde379ea8c",
          targetHandle: null,
          id: "reactflow__edge-cf75e6f2-b252-4327-ad75-c84fc50705bb-492150d2-357b-4292-8cc8-91cde379ea8c",
        },
      ],
    },
    {
      id: "2dc7580f-aa9d-442a-a8c3-2465d18eb73f",
      name: "Flow 22",
      nodes: [
        {
          width: 160,
          height: 43,
          id: "f23f6816-7039-4ce8-930b-b0ab6e89a3b7",
          position: {
            x: 286.5,
            y: 176.75,
          },
          type: "textNode",
          data: {
            text: "Hello man",
            imgSrc: "",
            tags: [
              {
                id: "1d6a40dd-7b91-4d68-8e96-5093292fa203",
                name: "Keyword",
                isEditing: false,
              },
            ],
            criteria: "contains",
            label: "Main Menu",
            children: [],
          },
          style: {
            width: "max-content",
            backgroundColor: "white",
            boxShadow: "0 2px 3px 5px rgba(200, 200, 200, 0.3)",
            borderRadius: "4px",
          },
          selected: false,
          positionAbsolute: {
            x: 286.5,
            y: 176.75,
          },
          dragging: false,
        },
        {
          width: 160,
          height: 43,
          id: "492150d2-357b-4292-8cc8-91cde379ea8c",
          position: {
            x: 287.5,
            y: 287.75,
          },
          type: "textNode",
          data: {
            text: "Hi man",
            imgSrc: "",
            tags: [
              {
                id: "c5c81367-6a70-45ca-ae6f-421e45c76431",
                name: "Keyword",
                isEditing: false,
              },
            ],
            criteria: "contains",
            label: "Main Menu",
            children: [],
          },
          style: {
            width: "max-content",
            backgroundColor: "white",
            boxShadow: "0 2px 3px 5px rgba(200, 200, 200, 0.3)",
            borderRadius: "4px",
          },
          selected: false,
          positionAbsolute: {
            x: 287.5,
            y: 287.75,
          },
          dragging: false,
        },
        {
          width: 160,
          height: 93,
          id: "5309b0ac-bf28-45cd-a81e-9be58e7ba9e7",
          position: {
            x: 88.5,
            y: 72.25,
          },
          type: "quickReplyNode",
          data: {
            text: "quickReplyNode",
            imgSrc: "",
            tags: [
              {
                id: "6c539c3f-47ce-414a-8af5-2caee31aa03b",
                name: "Keyword",
                isEditing: false,
              },
            ],
            criteria: "contains",
            label: "Main Menu",
            children: [
              "4dc0886c-9e83-4e88-a4e3-23130cbad8a0",
              "cf75e6f2-b252-4327-ad75-c84fc50705bb",
            ],
          },
          style: {
            width: "max-content",
            backgroundColor: "white",
            boxShadow: "0 2px 3px 5px rgba(200, 200, 200, 0.3)",
            borderRadius: "4px",
            height: 93,
          },
          selected: false,
          positionAbsolute: {
            x: 88.5,
            y: 72.25,
          },
          dragging: false,
        },
        {
          width: 160,
          height: 68,
          id: "798376c4-e2b5-47ad-8dbb-48aabd0b31c7",
          position: {
            x: -77,
            y: 201,
          },
          type: "keywordNode",
          data: {
            text: "keywordNode",
            imgSrc: "",
            tags: [
              {
                id: "f9a1d4ac-fafe-488c-a53f-82f11aeeb226",
                name: "Hello M",
                isEditing: false,
              },
              {
                id: "29a5ff1f-0e53-45ad-b0bd-bbed23375849",
                name: "Hi M",
                isEditing: false,
              },
            ],
            criteria: "contains",
            label: "Main Menu",
            children: [],
          },
          style: {
            width: "max-content",
            backgroundColor: "white",
            boxShadow: "0 2px 3px 5px rgba(200, 200, 200, 0.3)",
            borderRadius: "4px",
          },
          selected: false,
          positionAbsolute: {
            x: -77,
            y: 201,
          },
          dragging: false,
        },
        {
          width: 150,
          height: 21,
          id: "4dc0886c-9e83-4e88-a4e3-23130cbad8a0",
          data: {
            text: "Test 1M",
            isEditing: false,
          },
          position: {
            x: 5,
            y: 38,
          },
          type: "additionalQuickReplyNode",
          parentNode: "5309b0ac-bf28-45cd-a81e-9be58e7ba9e7",
          extent: "parent",
          draggable: false,
          style: {
            width: "9.4rem",
            pointerEvents: "none",
          },
          positionAbsolute: {
            x: 93.5,
            y: 110.25,
          },
        },
        {
          width: 150,
          height: 21,
          id: "cf75e6f2-b252-4327-ad75-c84fc50705bb",
          data: {
            text: "Test 2M",
            isEditing: false,
          },
          position: {
            x: 5,
            y: 63,
          },
          type: "additionalQuickReplyNode",
          parentNode: "5309b0ac-bf28-45cd-a81e-9be58e7ba9e7",
          extent: "parent",
          draggable: false,
          style: {
            width: "9.4rem",
            pointerEvents: "none",
          },
          positionAbsolute: {
            x: 93.5,
            y: 135.25,
          },
        },
      ],
      edges: [
        {
          source: "798376c4-e2b5-47ad-8dbb-48aabd0b31c7",
          sourceHandle: null,
          target: "5309b0ac-bf28-45cd-a81e-9be58e7ba9e7",
          targetHandle: null,
          id: "reactflow__edge-798376c4-e2b5-47ad-8dbb-48aabd0b31c7-5309b0ac-bf28-45cd-a81e-9be58e7ba9e7",
        },
        {
          source: "4dc0886c-9e83-4e88-a4e3-23130cbad8a0",
          sourceHandle: null,
          target: "f23f6816-7039-4ce8-930b-b0ab6e89a3b7",
          targetHandle: null,
          id: "reactflow__edge-4dc0886c-9e83-4e88-a4e3-23130cbad8a0-f23f6816-7039-4ce8-930b-b0ab6e89a3b7",
        },
        {
          source: "cf75e6f2-b252-4327-ad75-c84fc50705bb",
          sourceHandle: null,
          target: "492150d2-357b-4292-8cc8-91cde379ea8c",
          targetHandle: null,
          id: "reactflow__edge-cf75e6f2-b252-4327-ad75-c84fc50705bb-492150d2-357b-4292-8cc8-91cde379ea8c",
        },
      ],
    },
  ],
};

app.get("/get-flows/:token", (req, res) => {
  const token = req.params.token;
  const flows = flowData[token];
  if (flows?.length) {
    return res.json({ success: true, flows });
  }
  return res.json({ success: false, flows: null });
});

app.post("/save-flows/:token", (req, res) => {
  const token = req.params.token;
  const flows = req.body;
  flowData = {
    ...flowData,
    [token]: flows,
  };
  return res.json({ success: true });
});

app.listen(4000, () => {
  console.log("Up");
});
