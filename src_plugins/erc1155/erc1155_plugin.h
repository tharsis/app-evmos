#ifdef HAVE_NFT_SUPPORT

#pragma once

#include <string.h>
#include "eth_plugin_handler.h"
#include "shared_context.h"
#include "ethUtils.h"
#include "utils.h"
#include "uint256.h"

// Internal plugin for EIP 1155: https://eips.ethereum.org/EIPS/eip-1155

#define NUM_ERC1155_SELECTORS 3

typedef enum {
    SET_APPROVAL_FOR_ALL,
    SAFE_TRANSFER,
    SAFE_BATCH_TRANSFER,
} erc1155_selector_t;

typedef enum {
    FROM,
    TO,
    TOKEN_IDS_OFFSET,
    TOKEN_IDS_LENGTH,
    TOKEN_ID,
    VALUE_OFFSET,
    VALUE_LENGTH,
    VALUE,
    OPERATOR,
    APPROVED,
    NONE,
} erc1155_selector_field;

typedef struct erc1155_context_t {
    uint8_t address[ADDRESS_LENGTH];
    uint8_t tokenId[INT256_LENGTH];
    uint256_t value;

    uint16_t ids_array_len;
    uint32_t ids_offset;
    uint16_t values_array_len;
    uint32_t values_offset;
    uint16_t array_index;

    bool approved;
    erc1155_selector_field next_param;
    uint8_t selectorIndex;
} erc1155_context_t;

void handle_provide_parameter_1155(void *parameters);
void handle_query_contract_ui_1155(void *parameters);

#endif  // HAVE_NFT_SUPPORT
