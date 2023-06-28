import { ChartNode } from './NodeBase';
import { NodeRegistration } from './NodeRegistration';
import { NodeImpl } from './NodeImpl';
export * from './nodes/UserInputNode';
export * from './nodes/TextNode';
export * from './nodes/ChatNode';
export * from './nodes/PromptNode';
export * from './nodes/ExtractRegexNode';
export * from './nodes/CodeNode';
export * from './nodes/MatchNode';
export * from './nodes/IfNode';
export * from './nodes/ReadDirectoryNode';
export * from './nodes/ReadFileNode';
export * from './nodes/IfElseNode';
export * from './nodes/ChunkNode';
export * from './nodes/GraphInputNode';
export * from './nodes/GraphOutputNode';
export * from './nodes/SubGraphNode';
export * from './nodes/ArrayNode';
export * from './nodes/ExtractJsonNode';
export * from './nodes/ExtractYamlNode';
export * from './nodes/AssemblePromptNode';
export * from './nodes/LoopControllerNode';
export * from './nodes/TrimChatMessagesNode';
export * from './nodes/ExternalCallNode';
export * from './nodes/ExtractObjectPathNode';
export * from './nodes/RaiseEventNode';
export * from './nodes/ContextNode';
export * from './nodes/CoalesceNode';
export * from './nodes/PassthroughNode';
export * from './nodes/PopNode';
export * from './nodes/SetGlobalNode';
export * from './nodes/GetGlobalNode';
export * from './nodes/WaitForEventNode';
export * from './nodes/GptFunctionNode';
export * from './nodes/ToYamlNode';
export * from './nodes/GetEmbeddingNode';
export * from './nodes/VectorStoreNode';
export * from './nodes/VectorNearestNeighborsNode';
export * from './nodes/HashNode';
declare const register: NodeRegistration<"pop" | "match" | "code" | "userInput" | "prompt" | "text" | "array" | "chat" | "extractRegex" | "if" | "readDirectory" | "readFile" | "ifElse" | "chunk" | "graphInput" | "graphOutput" | "subGraph" | "extractJson" | "assemblePrompt" | "extractYaml" | "loopController" | "trimChatMessages" | "externalCall" | "extractObjectPath" | "raiseEvent" | "context" | "coalesce" | "passthrough" | "setGlobal" | "getGlobal" | "waitForEvent" | "gptFunction" | "toYaml" | "getEmbedding" | "vectorStore" | "vectorNearestNeighbors" | "hash", import("./nodes/UserInputNode").UserInputNode | import("./nodes/TextNode").TextNode | import("./nodes/ChatNode").ChatNode | import("./nodes/PromptNode").PromptNode | import("./nodes/ExtractRegexNode").ExtractRegexNode | import("./nodes/CodeNode").CodeNode | import("./nodes/MatchNode").MatchNode | import("./nodes/IfNode").IfNode | import("./nodes/ReadDirectoryNode").ReadDirectoryNode | import("./nodes/ReadFileNode").ReadFileNode | import("./nodes/IfElseNode").IfElseNode | import("./nodes/ChunkNode").ChunkNode | import("./nodes/GraphInputNode").GraphInputNode | import("./nodes/GraphOutputNode").GraphOutputNode | import("./nodes/SubGraphNode").SubGraphNode | import("./nodes/ArrayNode").ArrayNode | import("./nodes/ExtractJsonNode").ExtractJsonNode | import("./nodes/AssemblePromptNode").AssemblePromptNode | import("./nodes/ExtractYamlNode").ExtractYamlNode | import("./nodes/LoopControllerNode").LoopControllerNode | import("./nodes/TrimChatMessagesNode").TrimChatMessagesNode | import("./nodes/ExternalCallNode").ExternalCallNode | import("./nodes/ExtractObjectPathNode").ExtractObjectPathNode | import("./nodes/RaiseEventNode").RaiseEventNode | import("./nodes/ContextNode").ContextNode | import("./nodes/CoalesceNode").CoalesceNode | import("./nodes/PassthroughNode").PassthroughNode | import("./nodes/PopNode").PopNode | import("./nodes/SetGlobalNode").SetGlobalNode | import("./nodes/GetGlobalNode").GetGlobalNode | import("./nodes/WaitForEventNode").WaitForEventNode | import("./nodes/GptFunctionNode").GptFunctionNode | import("./nodes/ToYamlNode").ToYamlNode | import("./nodes/GetEmbeddingNode").GetEmbeddingNode | import("./nodes/VectorStoreNode").VectorStoreNode | import("./nodes/VectorNearestNeighborsNode").VectorNearestNeighborsNode | import("./nodes/HashNode").HashNode, {
    pop: import("./NodeImpl").NodeImplConstructor<import("./nodes/PopNode").PopNode>;
    match: import("./NodeImpl").NodeImplConstructor<import("./nodes/MatchNode").MatchNode>;
    code: import("./NodeImpl").NodeImplConstructor<import("./nodes/CodeNode").CodeNode>;
    userInput: import("./NodeImpl").NodeImplConstructor<import("./nodes/UserInputNode").UserInputNode>;
    prompt: import("./NodeImpl").NodeImplConstructor<import("./nodes/PromptNode").PromptNode>;
    text: import("./NodeImpl").NodeImplConstructor<import("./nodes/TextNode").TextNode>;
    array: import("./NodeImpl").NodeImplConstructor<import("./nodes/ArrayNode").ArrayNode>;
    chat: import("./NodeImpl").NodeImplConstructor<import("./nodes/ChatNode").ChatNode>;
    extractRegex: import("./NodeImpl").NodeImplConstructor<import("./nodes/ExtractRegexNode").ExtractRegexNode>;
    if: import("./NodeImpl").NodeImplConstructor<import("./nodes/IfNode").IfNode>;
    readDirectory: import("./NodeImpl").NodeImplConstructor<import("./nodes/ReadDirectoryNode").ReadDirectoryNode>;
    readFile: import("./NodeImpl").NodeImplConstructor<import("./nodes/ReadFileNode").ReadFileNode>;
    ifElse: import("./NodeImpl").NodeImplConstructor<import("./nodes/IfElseNode").IfElseNode>;
    chunk: import("./NodeImpl").NodeImplConstructor<import("./nodes/ChunkNode").ChunkNode>;
    graphInput: import("./NodeImpl").NodeImplConstructor<import("./nodes/GraphInputNode").GraphInputNode>;
    graphOutput: import("./NodeImpl").NodeImplConstructor<import("./nodes/GraphOutputNode").GraphOutputNode>;
    subGraph: import("./NodeImpl").NodeImplConstructor<import("./nodes/SubGraphNode").SubGraphNode>;
    extractJson: import("./NodeImpl").NodeImplConstructor<import("./nodes/ExtractJsonNode").ExtractJsonNode>;
    assemblePrompt: import("./NodeImpl").NodeImplConstructor<import("./nodes/AssemblePromptNode").AssemblePromptNode>;
    extractYaml: import("./NodeImpl").NodeImplConstructor<import("./nodes/ExtractYamlNode").ExtractYamlNode>;
    loopController: import("./NodeImpl").NodeImplConstructor<import("./nodes/LoopControllerNode").LoopControllerNode>;
    trimChatMessages: import("./NodeImpl").NodeImplConstructor<import("./nodes/TrimChatMessagesNode").TrimChatMessagesNode>;
    externalCall: import("./NodeImpl").NodeImplConstructor<import("./nodes/ExternalCallNode").ExternalCallNode>;
    extractObjectPath: import("./NodeImpl").NodeImplConstructor<import("./nodes/ExtractObjectPathNode").ExtractObjectPathNode>;
    raiseEvent: import("./NodeImpl").NodeImplConstructor<import("./nodes/RaiseEventNode").RaiseEventNode>;
    context: import("./NodeImpl").NodeImplConstructor<import("./nodes/ContextNode").ContextNode>;
    coalesce: import("./NodeImpl").NodeImplConstructor<import("./nodes/CoalesceNode").CoalesceNode>;
    passthrough: import("./NodeImpl").NodeImplConstructor<import("./nodes/PassthroughNode").PassthroughNode>;
    setGlobal: import("./NodeImpl").NodeImplConstructor<import("./nodes/SetGlobalNode").SetGlobalNode>;
    getGlobal: import("./NodeImpl").NodeImplConstructor<import("./nodes/GetGlobalNode").GetGlobalNode>;
    waitForEvent: import("./NodeImpl").NodeImplConstructor<import("./nodes/WaitForEventNode").WaitForEventNode>;
    gptFunction: import("./NodeImpl").NodeImplConstructor<import("./nodes/GptFunctionNode").GptFunctionNode>;
    toYaml: import("./NodeImpl").NodeImplConstructor<import("./nodes/ToYamlNode").ToYamlNode>;
    getEmbedding: import("./NodeImpl").NodeImplConstructor<import("./nodes/GetEmbeddingNode").GetEmbeddingNode>;
    vectorStore: import("./NodeImpl").NodeImplConstructor<import("./nodes/VectorStoreNode").VectorStoreNode>;
    vectorNearestNeighbors: import("./NodeImpl").NodeImplConstructor<import("./nodes/VectorNearestNeighborsNode").VectorNearestNeighborsNode>;
    hash: import("./NodeImpl").NodeImplConstructor<import("./nodes/HashNode").HashNode>;
}>;
export type Nodes = typeof register.NodesType;
export type NodeType = typeof register.NodeTypesType;
export declare const createNodeInstance: <T extends import("./nodes/UserInputNode").UserInputNode | import("./nodes/TextNode").TextNode | import("./nodes/ChatNode").ChatNode | import("./nodes/PromptNode").PromptNode | import("./nodes/ExtractRegexNode").ExtractRegexNode | import("./nodes/CodeNode").CodeNode | import("./nodes/MatchNode").MatchNode | import("./nodes/IfNode").IfNode | import("./nodes/ReadDirectoryNode").ReadDirectoryNode | import("./nodes/ReadFileNode").ReadFileNode | import("./nodes/IfElseNode").IfElseNode | import("./nodes/ChunkNode").ChunkNode | import("./nodes/GraphInputNode").GraphInputNode | import("./nodes/GraphOutputNode").GraphOutputNode | import("./nodes/SubGraphNode").SubGraphNode | import("./nodes/ArrayNode").ArrayNode | import("./nodes/ExtractJsonNode").ExtractJsonNode | import("./nodes/AssemblePromptNode").AssemblePromptNode | import("./nodes/ExtractYamlNode").ExtractYamlNode | import("./nodes/LoopControllerNode").LoopControllerNode | import("./nodes/TrimChatMessagesNode").TrimChatMessagesNode | import("./nodes/ExternalCallNode").ExternalCallNode | import("./nodes/ExtractObjectPathNode").ExtractObjectPathNode | import("./nodes/RaiseEventNode").RaiseEventNode | import("./nodes/ContextNode").ContextNode | import("./nodes/CoalesceNode").CoalesceNode | import("./nodes/PassthroughNode").PassthroughNode | import("./nodes/PopNode").PopNode | import("./nodes/SetGlobalNode").SetGlobalNode | import("./nodes/GetGlobalNode").GetGlobalNode | import("./nodes/WaitForEventNode").WaitForEventNode | import("./nodes/GptFunctionNode").GptFunctionNode | import("./nodes/ToYamlNode").ToYamlNode | import("./nodes/GetEmbeddingNode").GetEmbeddingNode | import("./nodes/VectorStoreNode").VectorStoreNode | import("./nodes/VectorNearestNeighborsNode").VectorNearestNeighborsNode | import("./nodes/HashNode").HashNode>(node: T) => NodeImpl<T, T["type"]>;
export declare function createUnknownNodeInstance(node: ChartNode): NodeImpl<ChartNode>;
export declare function nodeFactory<T extends NodeType>(type: T): Extract<Nodes, {
    type: T;
}>;
export type NodeOfType<T extends NodeType> = Extract<Nodes, {
    type: T;
}>;
export declare function getNodeDisplayName<T extends NodeType>(type: T): string;
export declare function isRegisteredNodeType(type: NodeType): boolean;
